sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(MessageToast, Controller, History) {
	"use strict";
	return Controller.extend("DrThinkingDoctor.controller.Chat", {
		onListItemPress: function(oEvent) {
			//this.getOwnerComponent().getRouter().navTo("chatroom");
			var sKey = "chatroom";
			var viewId = this.getView().getId().substring(0,10);
			sap.ui.getCore().byId(viewId + "--pageContainer").to(viewId + "--" + sKey);
		}
	});
});