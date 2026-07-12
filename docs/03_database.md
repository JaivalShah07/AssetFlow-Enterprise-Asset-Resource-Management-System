# AssetFlow X - Database Design

## Overview

AssetFlow X follows a modular PostgreSQL database architecture designed for scalability, data integrity, and maintainability. The schema is normalized to minimize redundancy while supporting all ERP workflows.

---

# Database Technology

- Database: PostgreSQL
- ORM: Prisma
- Authentication: JWT
- Storage: Local File Storage
- QR Generation: Unique Asset QR

---

# Entity Relationship Overview

```
Roles
   │
Users
   │
Employees
   │
Departments
   │
Assets
   ├──────────────┐
   │              │
Allocation    Maintenance
   │              │
Transfers      Audit
   │              │
Bookings   Notifications
        │
   Activity Logs
```

---

# Core Tables

## 1. Roles

Stores system roles.

Fields

- id
- role_name
- description
- permissions

---

## 2. Users

Stores authentication details.

Fields

- id
- email
- password_hash
- role_id
- employee_id
- status
- created_at

Constraints

- Email UNIQUE
- Password NOT NULL

---

## 3. Departments

Stores organization hierarchy.

Fields

- id
- name
- department_head
- parent_department
- status

---

## 4. Employees

Stores employee records.

Fields

- id
- employee_code
- name
- email
- phone
- department_id
- role_id
- status

---

## 5. Asset Categories

Fields

- id
- category_name
- description

---

## 6. Assets

Stores all registered assets.

Fields

- id
- asset_tag
- asset_name
- serial_number
- category_id
- acquisition_date
- acquisition_cost
- condition
- location
- status
- qr_code
- image_url
- shared_bookable
- created_at

Status ENUM

- Available
- Allocated
- Reserved
- Under Maintenance
- Lost
- Retired
- Disposed

Constraints

- Asset Tag UNIQUE
- Serial Number UNIQUE

---

## 7. Asset Allocation

Tracks ownership.

Fields

- id
- asset_id
- employee_id
- allocated_date
- expected_return
- returned_date
- status

Status

- Requested
- Approved
- Allocated
- Returned
- Rejected

---

## 8. Transfers

Tracks transfer requests.

Fields

- id
- allocation_id
- from_employee
- to_employee
- requested_by
- approved_by
- status

---

## 9. Resource Booking

Stores bookings.

Fields

- id
- resource_id
- booked_by
- start_time
- end_time
- status

Status

- Upcoming
- Ongoing
- Completed
- Cancelled

---

## 10. Maintenance

Stores maintenance requests.

Fields

- id
- asset_id
- issue
- priority
- assigned_to
- approval_status
- maintenance_status
- remarks

Workflow

Pending

↓

Approved

↓

Assigned

↓

In Progress

↓

Resolved

---

## 11. Audit

Stores audit cycles.

Fields

- id
- audit_name
- department_id
- auditor
- start_date
- end_date
- status

---

## 12. Audit Details

Stores verification of every asset.

Fields

- audit_id
- asset_id
- verification_status
- remarks

Status

- Verified
- Missing
- Damaged

---

## 13. Notifications

Stores notifications.

Fields

- id
- employee_id
- title
- message
- status
- created_at

---

## 14. Activity Logs

Stores every system action.

Fields

- id
- user_id
- module
- action
- old_value
- new_value
- timestamp

---

# Indexes

Unique

- email
- asset_tag
- serial_number

Normal

- department_id
- employee_id
- category_id
- asset_status
- booking_time
- audit_date

---

# Future Tables

These will be added in Layer 2.

- Asset DNA
- Digital Twin
- Recommendation Engine
- Asset Confidence
- Predictive Maintenance