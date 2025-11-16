# SAPUI5 REST Demo – Technical Guide

Technical guide for the **SAPUI5 REST Demo** application.  
The app consumes a public REST API (`JSONPlaceholder`) and displays a list of customers in a Fiori-style UI5 list.

---

## 1. Overview

This project demonstrates how to:

- Bootstrap a **SAPUI5** application with the classic `index.html + Component.js` setup.
- Create a **JSON model** and bind it to the view.
- Consume a **REST API (GET)** using `JSONModel.loadData(...)`.
- Display the data using **aggregation binding** in an `sap.m.List` with `sap.m.StandardListItem`.

The goal is to be a **small but realistic portfolio piece**: clean structure, clear documentation, and easy to extend (filters, detail page, SAP OData, etc.).

---

## 2. Technologies & Libraries

- **SAPUI5** (OpenUI5 runtime from SAP CDN)
- **JavaScript (ES5 style)** – used by UI5 modules
- **JSONModel** – `sap.ui.model.json.JSONModel`
- **REST API** – `https://jsonplaceholder.typicode.com/users`
- **HTML5 / CSS3**
- **VS Code** + any static server extension (for local testing)

---

## 3. Project Structure

Repository layout (simplified):

```text
sapui5-rest-demo/
│
├── webapp/
│   ├── controller/
│   │   └── Main.controller.js
│   ├── localService/
│   │   └── orders.json              # Optional mock data (not used by default)
│   ├── view/
│   │   └── Main.view.xml
│   ├── Component.js
│   ├── index.html
│   └── manifest.json
│
├── docs/
│   ├── TECHNICAL_GUIDE.md           # This document
│   └── USER_GUIDE.md                # End-user documentation (separate file)
│
├── .gitignore
├── LICENSE
└── README.md

