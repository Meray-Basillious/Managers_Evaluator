# Architecture & Implementation Guide - مقيم الأداء

## Backend Architecture

### Core Structure
```
backend/
├── src/
│   ├── app.ts                 # Express app initialization
│   ├── server.ts              # Server entry point
│   ├── config/                # Configuration management
│   │   ├── database.ts
│   │   ├── environment.ts
│   │   └── constants.ts
│   ├── models/                # Database models
│   │   ├── User.ts
│   │   ├── Assessment.ts
│   │   ├── Question.ts
│   │   ├── Answer.ts
│   │   ├── Evidence.ts
│   │   ├── AIAnalysis.ts
│   │   ├── ScoringResult.ts
│   │   └── others...
│   ├── routes/                # API endpoints
│   │   ├── auth.ts
│   │   ├── assessments.ts
│   │   ├── questions.ts
│   │   ├── answers.ts
│   │   ├── dashboard.ts
│   │   ├── reports.ts
│   │   ├── admin.ts
│   │   └── index.ts
│   ├── controllers/           # Business logic
│   │   ├── AuthController.ts
│   │   ├── AssessmentController.ts
│   │   ├── AnswerController.ts
│   │   ├── DashboardController.ts
│   │   ├── ReportController.ts
│   │   └── others...
│   ├── services/              # Business services
│   │   ├── AssessmentService.ts
│   │   ├── ScoringService.ts
│   │   ├── ReportService.ts
│   │   ├── EmailService.ts
│   │   ├── StorageService.ts
│   │   └── others...
│   ├── ai/                    # AI integration
│   │   ├── AnalysisService.ts
│   │   ├── classifiers.ts
│   │   ├── detectors.ts
│   │   ├── scorers.ts
│   │   └── insights.ts
│   ├── middleware/            # Express middleware
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   ├── validation.ts
│   │   └── logging.ts
│   ├── utils/                 # Utilities
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   ├── calculators.ts
│   │   └── helpers.ts
│   ├── types/                 # TypeScript types
│   │   ├── models.ts
│   │   ├── api.ts
│   │   ├── ai.ts
│   │   └── enums.ts
│   └── constants/             # Constants
│       ├── questions.ts
│       ├── dimensions.ts
│       └── scoring.ts
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

### Database Connection Pool
```typescript
Connection Pool Configuration:
- Min connections: 5
- Max connections: 20
- Connection timeout: 10 seconds
- Idle timeout: 30 seconds
- Validation interval: 60 seconds
```

### API Rate Limiting
```
- Global: 1000 requests/hour
- Authentication: 5 attempts/15 minutes
- Assessment creation: 50/day per user
- File uploads: 100MB/day per user
```

---

## Frontend Architecture

### Component Structure
```
frontend/src/
├── components/
│   ├── Common/                # Reusable components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Navigation.tsx
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── others...
│   ├── Assessment/            # Assessment components
│   │   ├── AssessmentWizard.tsx
│   │   ├── QuestionRenderer.tsx
│   │   ├── AnswerForm.tsx
│   │   ├── EvidenceUpload.tsx
│   │   ├── ProgressBar.tsx
│   │   └── others...
│   ├── Dashboard/             # Dashboard components
│   │   ├── DashboardLayout.tsx
│   │   ├── RadarChart.tsx
│   │   ├── HeatMap.tsx
│   │   ├── KPIWidget.tsx
│   │   ├── SummaryCard.tsx
│   │   └── others...
│   ├── Reports/               # Report components
│   │   ├── ReportView.tsx
│   │   ├── ReportExport.tsx
│   │   ├── ReportShare.tsx
│   │   └── others...
│   └── Admin/                 # Admin components
│       ├── UserManagement.tsx
│       ├── OrganizationSetup.tsx
│       ├── AssessmentConfig.tsx
│       └── others...
├── pages/
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── AssessmentCenter.tsx
│   ├── Assessment.tsx
│   ├── Reports.tsx
│   ├── Organization.tsx
│   ├── Admin.tsx
│   ├── NotFound.tsx
│   └── Profile.tsx
├── services/
│   ├── api.ts                 # API client
│   ├── auth.ts                # Auth service
│   ├── assessment.ts          # Assessment service
│   ├── report.ts              # Report service
│   ├── storage.ts             # Local storage
│   └── analytics.ts           # Analytics
├── store/                     # Redux store
│   ├── index.ts
│   ├── authSlice.ts
│   ├── assessmentSlice.ts
│   ├── dashboardSlice.ts
│   └── others...
├── hooks/                     # Custom hooks
│   ├── useAuth.ts
│   ├── useAssessment.ts
│   ├── useDashboard.ts
│   ├── useNotification.ts
│   └── others...
├── i18n/
│   ├── ar.json                # Arabic translations
│   ├── en.json                # English translations
│   └── i18n.ts                # i18n config
├── styles/
│   ├── globals.css
│   ├── variables.css
│   ├── themes.css
│   └── components.css
├── utils/
│   ├── formatters.ts
│   ├── validators.ts
│   ├── calculators.ts
│   ├── date.ts
│   └── helpers.ts
├── types/
│   ├── models.ts
│   ├── api.ts
│   └── ui.ts
├── App.tsx
├── main.tsx
├── vite-env.d.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

### State Management (Redux)
```typescript
Store Structure:
- auth: { user, token, isAuthenticated, loading }
- assessment: { current, list, loading, status }
- dashboard: { view, filters, data, loading }
- ui: { theme, language, notifications, modals }
- organization: { current, departments, analytics }
```

### Component Patterns

#### Functional Components with Hooks
```typescript
// Example pattern
const AssessmentComponent: React.FC<Props> = ({
  assessmentId,
  onComplete
}) => {
  const [state, setState] = useState(initialState);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  // Business logic here
  
  return (
    <div>
      {/* JSX here */}
    </div>
  );
};
```

#### Custom Hooks for Logic
```typescript
const useAssessment = (assessmentId: string) => {
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Load assessment
  }, [assessmentId]);
  
  return { assessment, loading };
};
```

---

## AI Engine Architecture

### Python Service
```
ai-engine/
├── src/
│   ├── main.py                # FastAPI entry point
│   ├── config.py
│   ├── analyzers/             # Analysis modules
│   │   ├── answer_classifier.py
│   │   ├── consistency_analyzer.py
│   │   ├── contradiction_detector.py
│   │   ├── exaggeration_detector.py
│   │   └── insight_generator.py
│   ├── classifiers/           # Classification modules
│   │   ├── responsibility_classifier.py
│   │   ├── complexity_classifier.py
│   │   └── maturity_classifier.py
│   ├── detectors/             # Pattern detectors
│   │   ├── bias_detector.py
│   │   ├── anomaly_detector.py
│   │   └── risk_detector.py
│   ├── scorers/               # Scoring modules
│   │   ├── job_size_scorer.py
│   │   ├── leadership_scorer.py
│   │   ├── promotion_scorer.py
│   │   └── others...
│   ├── insights/              # Insight generation
│   │   ├── recommendation_engine.py
│   │   ├── risk_assessment.py
│   │   └── gap_analyzer.py
│   ├── models/                # ML models
│   │   ├── trained_models/
│   │   └── model_loader.py
│   ├── utils/
│   │   ├── text_processing.py
│   │   ├── data_validation.py
│   │   └── helpers.py
│   └── tests/
├── requirements.txt
├── Dockerfile
└── README.md
```

### AI Endpoints
```
POST /api/ai/classify-answer
- Input: question, answer
- Output: classification, confidence

POST /api/ai/analyze-assessment
- Input: assessment_id
- Output: analysis results, insights

POST /api/ai/detect-contradictions
- Input: assessment_id
- Output: contradictions, severity

POST /api/ai/generate-insights
- Input: assessment_id
- Output: insights, recommendations

POST /api/ai/calculate-scores
- Input: assessment_id
- Output: all 10 scores
```

---

## API Endpoints

### Authentication
```
POST   /api/auth/register         # User registration
POST   /api/auth/login            # User login
POST   /api/auth/refresh-token    # Refresh JWT
POST   /api/auth/logout           # Logout
POST   /api/auth/forgot-password  # Password reset
```

### Assessments
```
GET    /api/assessments           # List assessments
POST   /api/assessments           # Create assessment
GET    /api/assessments/:id       # Get assessment
PUT    /api/assessments/:id       # Update assessment
POST   /api/assessments/:id/submit # Submit assessment
GET    /api/assessments/:id/progress # Get progress
```

### Questions
```
GET    /api/questions             # Get all questions
GET    /api/questions/:id         # Get question
GET    /api/dimensions            # Get dimensions
```

### Answers
```
POST   /api/answers               # Save answer
PUT    /api/answers/:id           # Update answer
GET    /api/answers/:assessmentId # Get assessment answers
```

### Evidence
```
POST   /api/evidence/upload       # Upload file
DELETE /api/evidence/:id          # Delete evidence
GET    /api/evidence/:id          # Get evidence
```

### Dashboard
```
GET    /api/dashboard/summary     # Dashboard summary
GET    /api/dashboard/assessment/:id # Assessment dashboard
GET    /api/dashboard/organization # Org analytics
GET    /api/dashboard/succession  # Succession matrix
GET    /api/dashboard/compensation # Compensation matrix
```

### Reports
```
GET    /api/reports/:assessmentId # Get report
POST   /api/reports/:assessmentId/export # Export report
POST   /api/reports/:assessmentId/share  # Share report
GET    /api/reports/:assessmentId/pdf    # Generate PDF
```

### Admin
```
GET    /api/admin/users           # List users
POST   /api/admin/users           # Create user
PUT    /api/admin/users/:id       # Update user
DELETE /api/admin/users/:id       # Delete user
GET    /api/admin/organization    # Org settings
PUT    /api/admin/organization    # Update org settings
```

---

## Security Architecture

### Authentication Flow
```
1. User submits credentials
2. Backend validates and generates JWT
3. Frontend stores JWT in secure HTTP-only cookie
4. Each request includes JWT in Authorization header
5. Backend validates JWT signature
6. Endpoint checks user permissions
```

### Authorization (RBAC)
```
Roles:
- admin: Full system access
- hr: Assessment management and organization settings
- consultant: Assessment review and reporting
- senior_manager: View and rate assessments
- manager: Review team member assessments
- employee: Complete own assessments

Permissions tied to roles.
```

### Data Encryption
```
- HTTPS/TLS for all communications
- Sensitive data encrypted at rest
- Password hashing with bcrypt (12 rounds)
- JWT with HS256 or RS256 signature
```

---

## Performance Optimization

### Backend
```
- Database query optimization with indexes
- Connection pooling
- Caching with Redis
- Pagination for large datasets
- Compression middleware (gzip)
- Response time monitoring
```

### Frontend
```
- Code splitting with lazy loading
- Image optimization
- CSS/JS minification
- Bundling optimization
- Service Worker for offline support
- Virtual scrolling for large lists
```

### AI Engine
```
- Model caching
- Asynchronous processing with task queue
- Batch processing where possible
- Result caching
```

---

## Monitoring & Logging

### Logging Strategy
```
Log Levels:
- ERROR: Application errors
- WARN: Warnings and deprecated features
- INFO: Important events
- DEBUG: Debug information

Tools:
- Winston for logging
- ELK Stack for log aggregation
- Structured logging (JSON format)
```

### Application Monitoring
```
Metrics:
- Request latency
- Error rate
- Database query time
- API response time
- User engagement
- Assessment completion rate

Tools:
- Prometheus for metrics collection
- Grafana for visualization
- AlertManager for alerts
```

---

## Testing Strategy

### Unit Tests
```
- Jest for testing
- Minimum 80% code coverage
- Test all services
- Test utilities and helpers
- Mock external dependencies
```

### Integration Tests
```
- Test API endpoints
- Test database interactions
- Test multi-component flows
- Use test database
```

### E2E Tests
```
- Cypress for browser automation
- Test complete user journeys
- Test critical workflows
- Test error scenarios
```

