sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("test.controller.app", {
		onInit: function () {
			var oModel4 = new sap.ui.model.json.JSONModel("p_info.json");
			this.getView().setModel(oModel4);
		}
	});
});