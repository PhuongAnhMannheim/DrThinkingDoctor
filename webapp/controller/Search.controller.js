sap.ui.define([
	"jquery.sap.global",
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
], function(jquery, MessageToast, Controller) {
	"use strict";
	return Controller.extend("DrThinkingDoctor.controller.Search", {
		onInit:function(){
			var oImage = this.getView().byId("Imgloupe");
			jQuery.sap.delayedCall(5000, this, function () {
				oImage.setBusy(false);
				this.getOwnerComponent().getRouter().navTo("match");
			});
			
		}
	});
});