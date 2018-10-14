sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DrThinkingDoctor.controller.Register", {
		onPressProfile: function(oEvent){
			this.getOwnerComponent().getRouter().navTo("profile");
		}
	});
});