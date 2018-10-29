sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/Fragment',
	'sap/m/Popover',
	'sap/m/Button',
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller"
], function(jquery, Fragment, Popover, Button, MessageToast, Controller) {
	"use strict";

	return Controller.extend("DrThinkingDoctor.controller.Home", {
		
		model : new sap.ui.model.json.JSONModel(),
		data : {
			navigation: [{
				title: 'Home',
				icon: 'sap-icon://home',
				key: 'home',
				visible: true
			},{
				title: 'Profile',
				key: 'profile',
				icon: 'sap-icon://doctor',
				visible: true
			},{
				title: 'Calendar',
				key: 'appointments',
				icon: 'sap-icon://appointment-2',
				visible: true
			},{
				title: 'Chat',
				icon: 'sap-icon://discussion',
				key: 'chat',
				visible: true
			}, 
			{
				title: 'Chatroom',
				icon: 'sap-icon://employee-lookup',
				key: 'chatroom',
				visible: true
			},
			{
				title: 'Patient Finder',
				icon: 'sap-icon://employee-lookup',
				key: 'search',
				visible: true
			},
			{
				title: 'Match',
				icon: 'sap-icon://employee-lookup',
				key: 'match',
				visible: true
			},
			{
				title: 'PatientProfile',
				icon: 'sap-icon://employee-lookup',
				key: 'patientprofile',
				visible: true
			}
			],
			fixedNavigation: [{
				title: 'FAQ',
				icon: 'sap-icon://sys-help'
			}, {
				title: 'Terms and Conditions',
				icon: 'sap-icon://crm-service-manager'
			}]
		},
		onInit : function() {
			this.model.setData(this.data);
			this.getView().setModel(this.model);
			/*this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);*/
		},
		onItemSelect : function(oEvent) {
			var key = oEvent.getParameter('item').getKey();
			this._homeNav(key);
		},
		handleUserNamePress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Feedback',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Help',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		},

		onSideNavButtonPress : function() {
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			var sideExpanded = toolPage.getSideExpanded();

			this._setToggleButtonTooltip(sideExpanded);

			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},
		_setToggleButtonTooltip : function(bLarge) {
			var toggleButton = this.byId('sideNavigationToggleButton');
			if (bLarge) {
				toggleButton.setTooltip('Large Size Navigation');
			} else {
				toggleButton.setTooltip('Small Size Navigation');
			}
		},
		onPressProfile:function(oEvent){
			this._homeNav("profile");
			//this.getOwnerComponent().getRouter().navTo("profile");
		},
		onPressAppointments:function(oEvent){
			this._homeNav("appointments");
			//this.getOwnerComponent().getRouter().navTo("appointment");
		},
		onPressChats: function(oEvent) {
			this._homeNav("chat");
			//this.getOwnerComponent().getRouter().navTo("chat");
		},
		onPressSearch: function(oEvent){
			this._homeNav("search");
			//this.getOwnerComponent().getRouter().navTo("search");
			jQuery.sap.delayedCall(1000, this, function () {
				this._homeNav("match");
			});
		},
		_homeNav:function(key){
			var sKey = key;
			var viewId = this.getView().getId();
			sap.ui.getCore().byId(viewId + "--pageContainer").to(viewId + "--" + sKey);
		}
	});
});