sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("test.controller.app_p", {
		onInit: function () {
			var oModel5 = new sap.ui.model.json.JSONModel("doc_info.json");
			this.getView().setModel(oModel5);
		}
	});
});