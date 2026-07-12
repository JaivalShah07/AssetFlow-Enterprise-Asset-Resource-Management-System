# AssetFlow

AssetFlow is organized as a React/Vite frontend, a Python FastAPI backend, focused AI services, and shared Python utilities.

## Project structure

```text
AssetFlow/
├── README.md
├── LICENSE
├── .gitignore
├── docker-compose.yml
├── architecture.md
├── CONTRIBUTING.md
│
├── docs/
│   ├── ProblemStatement.md
│   ├── Architecture.md
│   ├── Workflow.md
│   ├── BusinessRules.md
│   ├── Innovation.md
│   ├── API.md
│   ├── Database.md
│   ├── FutureRoadmap.md
│   ├── UserRoles.md
│   └── Screenshots/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Common/
│   │   │   ├── Dashboard/
│   │   │   ├── Asset/
│   │   │   ├── Booking/
│   │   │   ├── Audit/
│   │   │   ├── Maintenance/
│   │   │   ├── Notifications/
│   │   │   ├── DigitalTwin/
│   │   │   ├── AssetDNA/
│   │   │   └── Charts/
│   │   ├── pages/
│   │   │   ├── Login/
│   │   │   ├── Dashboard/
│   │   │   ├── Departments/
│   │   │   ├── Employees/
│   │   │   ├── Assets/
│   │   │   ├── Allocation/
│   │   │   ├── Booking/
│   │   │   ├── Maintenance/
│   │   │   ├── Audit/
│   │   │   ├── Reports/
│   │   │   ├── DigitalTwin/
│   │   │   ├── Settings/
│   │   │   └── Profile/
│   │   ├── layouts/
│   │   ├── routes/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── constants/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── controllers/
│   │   │   ├── AuthController/
│   │   │   ├── AssetController/
│   │   │   ├── BookingController/
│   │   │   ├── AllocationController/
│   │   │   ├── MaintenanceController/
│   │   │   ├── AuditController/
│   │   │   ├── ReportController/
│   │   │   └── NotificationController/
│   │   ├── routes/
│   │   ├── middleware/
│   │   │   ├── Auth/
│   │   │   ├── RBAC/
│   │   │   ├── Validation/
│   │   │   └── ErrorHandler/
│   │   ├── models/
│   │   │   ├── Asset/
│   │   │   ├── Employee/
│   │   │   ├── Department/
│   │   │   ├── Booking/
│   │   │   ├── Audit/
│   │   │   ├── Maintenance/
│   │   │   ├── Notification/
│   │   │   ├── Transfer/
│   │   │   └── ActivityLog/
│   │   ├── services/
│   │   │   ├── AuthService/
│   │   │   ├── AssetService/
│   │   │   ├── BookingService/
│   │   │   ├── AuditService/
│   │   │   ├── MaintenanceService/
│   │   │   ├── AnalyticsService/
│   │   │   └── NotificationService/
│   │   ├── intelligence/
│   │   │   ├── AssetDNA/
│   │   │   ├── DigitalTwin/
│   │   │   ├── Recommendation/
│   │   │   ├── PredictiveMaintenance/
│   │   │   ├── AuditIntelligence/
│   │   │   ├── AssetConfidence/
│   │   │   └── QRVerification/
│   │   ├── automation/
│   │   │   ├── Scheduler/
│   │   │   ├── WorkflowEngine/
│   │   │   ├── RuleEngine/
│   │   │   └── NotificationEngine/
│   │   ├── validators/
│   │   ├── config/
│   │   └── utils/
│   ├── tests/
│   └── requirements.txt
│
├── database/
│
├── ai-services/
│   ├── qr-verification/
│   │   ├── detector.py
│   │   ├── verifier.py
│   │   └── api.py
│   ├── predictive-maintenance/
│   │   ├── scoring.py
│   │   ├── predictor.py
│   │   └── rules.py
│   ├── recommendation-engine/
│   │   ├── allocator.py
│   │   ├── utilization.py
│   │   ├── replacement.py
│   │   └── recommendations.py
│   ├── audit-intelligence/
│   │   ├── priority.py
│   │   └── discrepancy.py
│   └── README.md
│
├── shared/
│   ├── constants/
│   ├── enums/
│   ├── helpers/
│   ├── scoring/
│   │   ├── asset_dna.py
│   │   ├── asset_health.py
│   │   ├── asset_risk.py
│   │   ├── reliability.py
│   │   ├── usage.py
│   │   └── confidence.py
│   ├── qr/
│   ├── notifications/
│   └── utils/
│
├── scripts/
└── deployment/
```

`frontend/node_modules/` and empty-folder `.gitkeep` files are intentionally omitted from the diagram.
