sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
    "sap/ui/sunshine/wt/model/formatter"
], function (Controller, History, formatter) {
    "use strict";
    return Controller.extend("sap.ui.sunshine.wt.controller.Details", {
        formatter : formatter,
        
        onInit : function () {

            var routeToDetails = sap.ui.core.UIComponent.getRouterFor(this);
            //can also use directly this.oRouter.attachRouteMatched(...)
            routeToDetails.attachRouteMatched(function (evt) {
                if (evt.getParameter("name") === "details") {
                    var forecastPath = evt.getParameter("arguments").forecast;
                    
                    this.getView().bindElement({
                        path: "/list/" + evt.getParameter("arguments").forecast
                    });
                }
            }, this);
        },

        onNavPress : function () {
            var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var routeToForecasts = sap.ui.core.UIComponent.getRouterFor(this);
				routeToForecasts.navTo("forecasts");
			}
        },

        onOpenMenu : function (evt) {
            var oButton = evt.getSource();

            var settingsMenu;
            // create menu only once
            if (!settingsMenu) {
                settingsMenu = sap.ui.xmlfragment(
                    "sap.ui.sunshine.wt.fragment.SettingsMenu",
                    this
                );
                this.getView().addDependent(settingsMenu);
            }

            var eDock = sap.ui.core.Popup.Dock;
            settingsMenu.open(false, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
        }
   });
});