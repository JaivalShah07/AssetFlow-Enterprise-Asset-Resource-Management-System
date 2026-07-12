# AssetFlow X - REST API Specification

Base URL

```
/api/v1
```

---

# Authentication

POST /auth/signup

POST /auth/login

POST /auth/logout

POST /auth/forgot-password

GET /auth/profile

---

# Departments

GET /departments

POST /departments

PUT /departments/:id

DELETE /departments/:id

---

# Employees

GET /employees

POST /employees

GET /employees/:id

PUT /employees/:id

DELETE /employees/:id

---

# Asset Categories

GET /categories

POST /categories

PUT /categories/:id

DELETE /categories/:id

---

# Assets

GET /assets

POST /assets

GET /assets/:id

PUT /assets/:id

DELETE /assets/:id

GET /assets/search

GET /assets/qr/:assetTag

---

# Asset Allocation

GET /allocations

POST /allocations

PUT /allocations/:id

POST /allocations/return

POST /allocations/transfer

---

# Transfers

GET /transfers

POST /transfers

PUT /transfers/:id/approve

PUT /transfers/:id/reject

---

# Resource Booking

GET /bookings

POST /bookings

PUT /bookings/:id

DELETE /bookings/:id

GET /bookings/calendar

---

# Maintenance

GET /maintenance

POST /maintenance

PUT /maintenance/:id/approve

PUT /maintenance/:id/assign

PUT /maintenance/:id/resolve

---

# Audit

GET /audits

POST /audits

PUT /audits/:id

POST /audits/:id/verify

GET /audits/:id/report

---

# Reports

GET /reports/dashboard

GET /reports/assets

GET /reports/maintenance

GET /reports/utilization

GET /reports/bookings

GET /reports/export

---

# Notifications

GET /notifications

PUT /notifications/:id/read

DELETE /notifications/:id

---

# Activity Logs

GET /activity-logs

GET /activity-logs/:id

---

# Standard API Response

Success

```json
{
  "success": true,
  "message": "Request Successful",
  "data": {}
}
```

Error

```json
{
  "success": false,
  "message": "Validation Failed",
  "errors": []
}
```

---

# Authentication

JWT Bearer Token

```
Authorization: Bearer <token>
```

Required for all protected routes.