sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("demo.fiori.pedidos.controller.Main", {
    onInit: function () {
      // Punto de entrada de la vista
      // Más adelante podemos agregar filtros, cargar desde API, etc.
    },

    onListItemPress: function (oEvent) {
      var oItem = oEvent.getSource();
      var sOrderId = oItem.getBindingContext("orders").getProperty("OrderID");
      MessageToast.show("Pedido seleccionado: " + sOrderId);
    }
  });
});
