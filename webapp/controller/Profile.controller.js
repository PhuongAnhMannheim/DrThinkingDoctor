/* global firebase*/
sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
], function(MessageToast, Controller) {
	"use strict";
	return Controller.extend("DrThinkingDoctor.controller.Profile", {

		onInit: function () {
			/*var config = {
			    apiKey: "AIzaSyAgcA6_4hD7bcDUY7emEzk5ubStitgrB08",
			    authDomain: "drthinking-205bc.firebaseapp.com",
			    databaseURL: "https://drthinking-205bc.firebaseio.com",
			    projectId: "drthinking-205bc",
			    storageBucket: "drthinking-205bc.appspot.com",
			    messagingSenderId: "233440483716"
			  };
			  firebase.initializeApp(config);*/
			var oModel = new sap.ui.model.json.JSONModel("profile.json");
			this.getView().setModel(oModel);

		},
		
		onPressHome: function(oEvent){
			this.getOwnerComponent().getRouter().navTo("home");
		},
		
		onExit : function () {
			if (this._oPopover) {
				this._oPopover.destroy();
			}
		},

		_getPopover : function () {
			if (!this._oPopover) {
				this._oPopover = sap.ui.xmlfragment("sap.m.sample.ObjectHeaderResponsiveIII.Popover", this);
				this.getView().addDependent(this._oPopover);
			}
			return this._oPopover;
		},

		handleTitlePress : function (oEvent) {
			var domRef = oEvent.getParameter("domRef");
			this._getPopover().openBy(domRef);
		},
		
		onRejectPress : function (){
			this.getView().byId("notifitem").destroy(true);
			MessageToast.show("You rejected the request.");
		},
		
		onAcceptPress : function (){
			this.getView().byId("notifitem").destroy(true);
			MessageToast.show("You accepted the request.");
		}
	});
});