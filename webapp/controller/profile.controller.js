sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("test.controller.profile", {
		onInit: function () {
			var oModel2 = new sap.ui.model.json.JSONModel("doc_info.json");
			this.getView().setModel(oModel2);
		}
	});
});