# AssetFlow X - Business Rules

---

# Authentication

- Email must be unique.
- Password minimum 8 characters.
- JWT authentication required.
- Signup creates Employee role only.
- Admin assigns higher roles.

---

# Asset Registration

- Asset Tag is unique.
- Serial Number is unique.
- Acquisition Cost ≥ 0.
- Purchase date cannot be future.
- QR generated automatically.
- Status defaults to Available.

---

# Asset Allocation

Rules

- Asset cannot be allocated twice.
- Asset must be Available.
- Transfer requires approval.
- Returned asset becomes Available.
- Overdue returns trigger notifications.

Workflow

Request

↓

Approval

↓

Allocation

↓

Return

↓

Inspection

↓

Available

---

# Transfer

- Only Asset Manager or Department Head can approve.
- Allocation history must never be deleted.
- Every transfer updates Activity Logs.

---

# Booking

Rules

- Booking time cannot overlap.
- Start Time < End Time.
- Cancelled bookings release resource.
- Completed bookings become read-only.

---

# Maintenance

Workflow

Pending

↓

Approved

↓

Technician Assigned

↓

In Progress

↓

Resolved

Rules

- Asset becomes Under Maintenance after approval.
- Resolved assets become Available.
- Every maintenance record remains permanent.

---

# Audit

Workflow

Create Cycle

↓

Assign Auditor

↓

Verification

↓

Discrepancy Report

↓

Close Cycle

Rules

- Closed audits cannot be edited.
- Missing assets become Lost.
- Damaged assets create maintenance requests.

---

# Reports

Generated from live data.

Reports

- Asset Utilization
- Department Summary
- Maintenance Frequency
- Idle Assets
- Booking Heatmap

---

# Notifications

Trigger Events

- Asset Allocated
- Asset Returned
- Booking Approved
- Booking Reminder
- Maintenance Approved
- Audit Completed
- Overdue Return

---

# Activity Logs

Every CRUD operation generates a log.

Stores

- User
- Module
- Action
- Timestamp
- Previous Value
- New Value

Logs are immutable.

---

# Permissions

Admin

- Full Access

Asset Manager

- Asset CRUD
- Allocation
- Maintenance Approval

Department Head

- Department Assets
- Transfer Approval

Employee

- View Assets
- Booking
- Maintenance Request

Auditor

- Audit Cycle
- Verification