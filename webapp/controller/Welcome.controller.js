sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
], function(MessageToast, Controller) {
	"use strict";

	return Controller.extend("DrThinkingDoctor.controller.Welcome", {
		onPressRegister: function(oEvent){
			/*var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("register");*/
			this.getOwnerComponent().getRouter().navTo("register");
			/*var msg = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\r\n eirmod.';
			MessageToast.show(msg);*/
		}
	});
});