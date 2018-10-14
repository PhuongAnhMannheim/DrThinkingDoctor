sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
], function(MessageToast, Controller) {
	"use strict";
	return Controller.extend("DrThinkingDoctor.controller.Profile", {
		onPressHome: function(oEvent){
			this.getOwnerComponent().getRouter().navTo("home");
		},
		onInit: function () {
 
    
			var oModel = new sap.ui.model.json.JSONModel("profile.json");
			

			this.getView().setModel(oModel);

		}
	});
});