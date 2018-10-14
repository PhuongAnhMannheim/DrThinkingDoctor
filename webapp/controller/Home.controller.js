sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
], function(MessageToast, Controller) {
	"use strict";

	return Controller.extend("DrThinkingDoctor.controller.Home", {
		onPressSearch: function(oEvent){
			this.getOwnerComponent().getRouter().navTo("search");
		},
		onPressAppointments:function(oEvent){
			this.getOwnerComponent().getRouter().navTo("appointment");
		},
		onPressProfile:function(oEvent){
			this.getOwnerComponent().getRouter().navTo("profile");
		},
		onPressChats: function(oEvent) {
				this.getOwnerComponent().getRouter().navTo("chat");
		}
		
	});
});