sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                //Recent Change
                var oModel = this.getOwnerComponent().getModel();
                var oNote = oModel.bindContext('/FLEXIOM');
                debugger;
                // oNote.requestValue().then(function (sValue) {
                //     debugger;
                // });
            }
        });
    });
