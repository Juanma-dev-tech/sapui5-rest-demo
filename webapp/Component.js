sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
  "use strict";

  return UIComponent.extend("demo.fiori.pedidos.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      // Llama al init estándar
      UIComponent.prototype.init.apply(this, arguments);

      // 👉 Acá más adelante vamos a poder traer datos desde una API u OData
      // Por ahora usamos datos mock en memoria (ideal para practicar UI5)
      // Creamos el modelo
      var oModel = new JSONModel();
      
      // Cargamos los datos desde el JSON externo
      //oModel.loadData("localService/orders.json");

      // 👉 Llamada REST real (GET) a una API pública
      oModel.loadData("https://jsonplaceholder.typicode.com/users");
      // Nombre del modelo: "orders" (lo vamos a usar en la vista)
      this.setModel(oModel, "orders");
    }
  });
});
