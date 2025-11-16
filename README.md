# 📗 User Guide – SAPUI5 REST Demo

This guide explains how to use the SAPUI5 REST Demo application.  
No technical background is required.

---

## 1. Purpose

The application displays a list of users loaded from a public REST API:

```
https://jsonplaceholder.typicode.com/users
```

Each list item shows:

- **Name**
- **Email**
- **City**

The UI follows a Fiori-style layout.

---

## 2. How to Start the Application

### Option A – Using Live Server (Recommended)

1. Open the project folder in **Visual Studio Code**.
2. Right-click on `webapp/index.html`.
3. Select **“Open with Live Server”**.
4. The browser will launch automatically.

### Option B – Using a local static server

From terminal:

```
npx serve
```

or any HTTP server.

> ⚠️ Avoid opening the app with `file://`  
Browsers block API requests without an HTTP server.

---

## 3. Main Screen

After launching, you will see:

- A header: **“Sales Orders (Demo UI5)”**
- A scrollable list of entries
- Each entry displays:
  - Name (title)
  - Email (subtitle)
  - City (information on the right)

---

## 4. Interaction

The current version is **read-only**.

You can:

- Scroll the list  
- View user basic information

Future enhancements may include:

- Navigation to a detail screen  
- Filtering or searching  
- Sorting  
- Error handling for API failures  

---

## 5. Data Source Information

The backend source is a public mock API:

```
GET /users
```

Provided by **JSONPlaceholder**, intended for demos and testing.

Data is static and predictable.

---

## 6. Offline Mode (Optional)

A local JSON file exists:

```
webapp/localService/orders.json
```

Developers can switch to this local mock data if needed.

---

## 7. Troubleshooting

### 🔸 The list appears empty

Possible reasons:

- No active internet connection  
- The API endpoint is temporarily unavailable  
- You opened the project using `file://`  

➡ **Solution:** Use a local server (Live Server, `serve`, UI5 Tooling).

---

### 🔸 CORS warnings in the console

May happen when mixing HTTP and HTTPS.

➡ **Solution:** Run the app using Live Server.

---

## 8. FAQ

### Do I need a login?
No. The API is public.

### Can this be connected to SAP OData?
Yes — this project can easily be adapted to an OData V2 service.

### Can I use it for my job interviews?
Absolutely — this project demonstrates strong UI5 fundamentals.

### Is the data real?
No. It is mock data provided for demos.

---

## 9. Summary

The SAPUI5 REST Demo:

- Loads data from a REST API  
- Displays it in a Fiori list  
- Requires no setup from the user  
- Is simple, clean, and ideal for demos or portfolio use  

