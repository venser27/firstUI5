sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
	
], function(Controller,JSONModel,ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcamp.controller.App", {
		
			onInit : function () {
				// set data model on view
					var oData = {
							  field : {
									username : "LECHEPLAN"
								}
					};
					var oModel = new JSONModel(oData);
					this.getView().setModel(oModel);
			
					// set i18n model on view
					var i18nModel = new ResourceModel({
					bundleName: "sap.ui.bootcamp.i18n.i18n"
					});
					this.getView().setModel(i18nModel, "i18n");
					
			},
			
			onLoginPress: function(){
					// var oUsername = this.getView().byId("username").getValue();
					// var oPassword = this.getView().byId("password").getValue();
					
					// read msg from i18n model
					var oBundle = this.getView().getModel("i18n").getResourceBundle();
					var sRecipient = this.getView().getModel().getProperty("/field/username");
					var sMsg = oBundle.getText("helloMsg", [sRecipient]);
					var sMsg2 = oBundle.getText("changetxt");
					// show message
					sap.m.MessageToast.show(sMsg);
					sap.m.MessageToast.show(sMsg2);
			}
			// if(oUsername.length ===0 &&	oPassword.length ===0) {
			// 			sap.m.MessageToast.show("Please fill all fields");
			// } else if (oUsername.length <6 | oUsername.length >8 
			// 		&& oPassword.length ===0) {
			// 			sap.m.MessageToast.show("Username must be 6-8 characters, please fill all fields");
			// } else if ((oUsername.length >=6 | oUsername.length <=8) 
			// 		&& (oPassword.length <7 | oUsername.length >10)) {
			// 			sap.m.MessageToast.show("Password must be 7-10 characters");
			// } else if (oUsername==="jokintia" && oPassword==="jokintia") {
			// 			sap.m.MessageToast.show("Success");
			// } else {
			// 			sap.m.MessageToast.show("Please check credentials");
			// 		}
			// 						}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});
