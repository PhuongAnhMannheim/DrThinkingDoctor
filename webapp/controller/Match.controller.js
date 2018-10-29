sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
], function(MessageToast, Controller) {
	"use strict";

	return Controller.extend("DrThinkingDoctor.controller.Matching", {
		
		onPressPatientProfile: function(oEvent){
			/*this.getOwnerComponent().getRouter().navTo("patientprofile");*/
			this._homeNav("patientprofile");
		},
		
		onPressChat:function(oEvent){
			/*this.getOwnerComponent().getRouter().navTo("chatroom");*/
			this._homeNav("chat");
		},
		
		onPressReject:function(oEvent){
			MessageToast.show("We are sorry, but the reject functionality is not implemented, yet");
		},
		
		_homeNav:function(key){
			var sKey = key;
			var viewId = this.getView().getId().substring(0,10);
			sap.ui.getCore().byId(viewId + "--pageContainer").to(viewId + "--" + sKey);
		}
		
	});
});