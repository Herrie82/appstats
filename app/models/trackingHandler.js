/*
 * trackingHandler
 */

function trackingHandler(params)
{
}

trackingHandler.prototype.ask = function(assistant)
{
    assistant.controller.showAlertDialog(
    {
        title:	    	$L("Installation and Usage"),
	message:    	$L("To better understand where our Apps are installed and how they are used, we ask you to allow us to collect anonymous installation and usage data. All collected data is publicly available."),
	choices:	[{label:$L("Sure!"), value:'yes'},{label:$L("No, thanks"), value:'no'},],
	onChoose:	this.askDialogResponse.bindAsEventListener(this)
    });
}

trackingHandler.prototype.askDialogResponse = function(value)
{
    this.cookie = new preferenceCookie();
	this.prefs = this.cookie.get();

	if (value == "yes") {
        this.prefs.trackingState='track';
    };
    if (value == "no") {
        this.prefs.trackingState='donttrack';
    };
    
	this.cookie.put(this.prefs);
}