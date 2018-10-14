sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
], function(MessageToast, Controller) {
	"use strict";

	return Controller.extend("DrThinkingDoctor.controller.Matching", {
	/*	onPressPatientProfile: function(oEvent){
			this.getOwnerComponent().getRouter().navTo("search");
		},*/
		onPressChat:function(oEvent){
			this.getOwnerComponent().getRouter().navTo("chat");
		},
		onPressReject:function(oEvent){
			this.getOwnerComponent().getRouter().navTo("reject");
		}
		
	});
});