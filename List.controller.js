 sap.ui.define([
		'sap/ui/core/mvc/Controller'
	], function(Controller) {
	"use strict";

	var ListController = Controller.extend("sap.ui.sunshine.wt.List", {

		onInit : function (evt) {
            //alert("Blah");
		},
        
        onPress : function (evt) {
            var oBindingContext = evt.getSource().getBindingContext(); 
            page2.setBindingContext(oBindingContext); // make sure the detail page has the correct data context
			app.to("page2");
        }
	});

	return ListController;

}); 