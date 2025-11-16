# 📘 Technical Guide – SAPUI5 REST Demo

This document explains the technical architecture, components, and behavior of the SAPUI5 REST Demo application.

## 1. Overview

This project demonstrates how to:

- Bootstrap a SAPUI5 application with the classic **index.html + Component.js** setup.
- Create a **JSONModel** and bind it to the view.
- Consume a **REST API (GET)** using `JSONModel.loadData(...)`.
- Display remote data using **aggregation binding** in `sap.m.List` with `sap.m.StandardListItem`.

The goal is to serve as a small but realistic portfolio piece:  
clean structure, clear documentation, and easy to extend (filters, detail page, SAP OData, etc.).

## 2. Technologies & Libraries

- **SAPUI5 / OpenUI5 runtime** (loaded from SAP CDN)
- **JavaScript (ES5)** – compatible with UI5 module syntax
- **JSONModel** (`sap.ui.model.json.JSONModel`)
- **REST API** – https://jsonplaceholder.typicode.com/users
- **HTML5 / CSS3**
- **Visual Studio Code**, Live Server, or any static HTTP server

## 3. Project Structure

Repository layout (simplified):

```
sapui5-rest-demo/
│
├── webapp/
│   ├── controller/
│   │   └── Main.controller.js
│   ├── localService/
│   │   └── orders.json
│   ├── view/
│   │   └── Main.view.xml
│   ├── Component.js
│   ├── index.html
│   └── manifest.json
│
├── docs/
│   ├── TECHNICAL_GUIDE.md
│   └── USER_GUIDE.md
│
├── .gitignore
├── LICENSE
└── README.md
```

## 4. Application Bootstrapping

The entry point is `index.html`, which loads SAPUI5 from the CDN and initializes the Component.

## 5. Component Initialization (`Component.js`)

The application creates and registers a **global JSONModel** named `"orders"`.

## 6. View Structure (`Main.view.xml`)

The main view contains a Fiori Page and an `sap.m.List` bound to the API data.

## 7. Controller (`Main.controller.js`)

The controller is minimal and acts as a placeholder for future logic.

## 8. Data Binding

Uses aggregation and property binding to render the REST API results.

## 9. REST API Details

Endpoint: `https://jsonplaceholder.typicode.com/users`

## 10. Local Mock Data

Located at: `webapp/localService/orders.json`

## 11. Running the Application

Use Live Server or any static HTTP server.

## 12. Possible Enhancements

- Routing  
- Error handling  
- Filters  
- OData model  
- Deployment to SAP BTP  

## 13. Summary

A clean, minimal SAPUI5 project useful for portfolio, interviews, and training.


