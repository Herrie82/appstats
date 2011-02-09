// get the cookies
var prefs = new preferenceCookie();


// stage names
var mainStageName = 'appstats-main';

var th = new trackingHandler();

function AppAssistant() {}

AppAssistant.prototype.handleLaunch = function(params)
{
	
	/*
	alert('--------------------------');
	if (params)
		for (var p in params)
			if (typeof(params[p]) != 'function')
				alert(p+': '+params[p]);
	*/
					
    this.controller.createStageWithCallback({name: mainStageName, lightweight: true}, this.launchFirstScene.bind(this));
};

AppAssistant.prototype.launchFirstScene = function(controller)
{
    controller.pushScene('main');
};

AppAssistant.prototype.cleanup = function(event)
{
};


// Local Variables:
// tab-width: 4
// End:
