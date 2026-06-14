# مقيم الأداء - Performance Evaluator Platform

## 🚀 Complete AI-Powered Manager Performance Evaluation System

**مقيم الأداء** is an enterprise-grade, multi-source diagnostic AI platform designed to objectively evaluate manager effectiveness and organizational roles. It combines employee inputs, manager assessments, senior management perspectives, KPI data, and AI analysis to discover organizational reality and reduce personal bias.

---

## 📋 Quick Navigation

- **[System Overview](docs/01-SYSTEM_OVERVIEW.md)** - Architecture, vision, and principles
- **[Database Schema](docs/02-DATABASE_SCHEMA.md)** - Complete database design with ERD
- **[Scoring Formulas](docs/03-SCORING_FORMULAS.md)** - All 10 scoring indices with detailed calculations
- **[Architecture Guide](docs/04-ARCHITECTURE.md)** - Technical architecture and patterns
- **[Assessment Questions](docs/05-ASSESSMENT_QUESTIONS.md)** - All 100+ questions across 9 dimensions
- **[Design System](docs/06-DESIGN_SYSTEM.md)** - UI/UX specifications for modern enterprise design

---

## 🎯 Key Features

### Multi-Source Assessment
- ✅ Employee self-assessment
- ✅ Direct manager evaluation  
- ✅ Senior management perspective
- ✅ Supporting evidence collection
- ✅ KPI data integration
- ✅ AI-powered analysis
- ✅ Expert review and validation

### AI Analytics Engine
- ✅ Answer classification & analysis
- ✅ Consistency measurement  
- ✅ Contradiction detection
- ✅ Organizational insights
- ✅ Risk assessment
- ✅ Promotion readiness calculation

### 10 Comprehensive Scoring Indices
1. Job Size Index
2. Leadership Index
3. Managerial Maturity
4. Decision Authority
5. Complexity Index
6. Promotion Readiness
7. Job Value
8. Compensation Fairness
9. Key Person Risk
10. Organizational Influence

### Executive Dashboard
- 5 specialized dashboard views (CEO, HR, Consultant, Manager, Employee)
- Interactive visualizations (radar charts, heat maps, gap analysis)
- Department comparisons, succession planning, risk matrices
- Real-time analytics and trend analysis

### Automated Reports
- Executive summaries
- Detailed analysis with recommendations
- Promotion readiness assessments
- Compensation reviews
- Development plans
- PDF export and sharing capabilities

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 16+
- Python 3.10+
- Docker & Docker Compose (optional but recommended)

### Using Docker (Recommended)

```bash
# Clone and navigate
git clone <repo-url>
cd Managers_Evaluator

# Start all services
docker-compose -f docker/docker-compose.yml up -d

# Wait for services to initialize
sleep 30

# Run database migrations
docker exec managers_evaluator_backend npm run db:migrate

# Access applications
# Frontend:  http://localhost:3000
# Backend:   http://localhost:5000/api
# AI Engine: http://localhost:8000
# MinIO:     http://localhost:9001 (credentials: minioadmin/minioadmin)
```

### Manual Setup

**Backend**
```bash
cd backend
npm install
cp .env.example .env
npm run db:migrate
npm run dev  # Runs on http://localhost:5000
```

**Frontend**
```bash
cd frontend
npm install
npm run dev  # Runs on http://localhost:3000
```

**AI Engine**
```bash
cd ai-engine
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python src/main.py  # Runs on http://localhost:8000
```

---

## 📁 Project Structure

```
Managers_Evaluator/
├── docs/                      # Comprehensive documentation (6 guides)
├── backend/                   # Node.js/Express API with TypeScript
├── frontend/                  # React 18 SPA with TypeScript
├── ai-engine/                 # Python FastAPI AI service
├── database/                  # Database migrations and seeds
├── docker/                    # Docker configuration (compose, Dockerfiles)
└── README.md                  # This file
```

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, TypeScript, Redux, Tailwind CSS, Material-UI |
| **Backend** | Node.js, Express, TypeScript, PostgreSQL, TypeORM |
| **AI** | Python, FastAPI, spaCy, scikit-learn, TensorFlow |
| **Infrastructure** | Docker, PostgreSQL, Redis, MinIO/S3 |
| **Monitoring** | Prometheus, Grafana, ELK Stack |

---

## 📊 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (React)                        │
│              Dashboard | Assessment | Reports              │
└───────────────────────┬─────────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────────┐
│                   API Gateway & Auth                        │
│              JWT | Rate Limiting | CORS                     │
└───────────────────────┬─────────────────────────────────────┘
                        │
    ┌───────────────────┼───────────────────┐
    │                   │                   │
┌───▼────────────┐ ┌────▼─────────┐ ┌──────▼──────────┐
│  Backend API   │ │  AI Engine   │ │  File Storage  │
│  (Express)     │ │  (FastAPI)   │ │  (MinIO/S3)    │
└───┬────────────┘ └────┬─────────┘ └──────┬──────────┘
    │                   │                   │
    └───────────────────┼───────────────────┘
                        │
                ┌───────▼───────┐
                │   PostgreSQL  │
                │   Redis Cache │
                └───────────────┘
```

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/refresh-token
POST   /api/auth/logout
```

### Assessments
```
GET    /api/assessments
POST   /api/assessments
GET    /api/assessments/:id
PUT    /api/assessments/:id
POST   /api/assessments/:id/submit
```

### Dashboard
```
GET    /api/dashboard/summary
GET    /api/dashboard/assessment/:id
GET    /api/dashboard/organization
```

### Reports
```
GET    /api/reports/:assessmentId
POST   /api/reports/:assessmentId/export
POST   /api/reports/:assessmentId/share
```

---

## 📚 Assessment Framework

### 9 Dimensions
1. **Job Identity** - Current role vs. actual responsibilities
2. **Responsibilities** - Classification and delegation capability
3. **Time Analysis** - Time allocation and operational load
4. **Authority** - Decision-making independence
5. **Resources** - Team size, budget, stability
6. **Achievements** - Results and business impact
7. **Obstacles** - Challenges and problem-solving
8. **Vision** - Strategic planning and improvement ideas
9. **Decision-Making** - Decision authority and frequency

### 100+ Questions
- Multi-perspective rating (Employee, Manager, Senior Mgmt)
- Evidence upload requirements
- AI classification and analysis
- Confidence scoring
- Gap detection

---

## 🧠 AI Analytics Capabilities

The AI engine automatically:
- ✅ Classifies answers into categories
- ✅ Detects contradictions between stakeholders
- ✅ Identifies exaggeration patterns
- ✅ Measures internal consistency
- ✅ Generates organizational insights
- ✅ Flags risk areas
- ✅ Calculates all 10 scoring indices
- ✅ Produces executive recommendations

---

## 📈 Scoring Models

Each of the 10 indices uses weighted formulas combining:
- Direct question responses
- AI analysis confidence scores
- Evidence quality assessment
- KPI data validation
- Stakeholder agreement levels
- Organizational context

See [Scoring Formulas](docs/03-SCORING_FORMULAS.md) for detailed calculations.

---

## 🔐 Security

- ✅ JWT authentication with refresh tokens
- ✅ Role-based access control (RBAC)
- ✅ End-to-end encryption for sensitive data
- ✅ Audit trail for all actions
- ✅ SQL injection prevention
- ✅ XSS protection
- ✅ CSRF tokens
- ✅ Rate limiting
- ✅ Data encryption at rest

---

## 🌍 Internationalization

- 🇸🇦 Arabic (ar-SA) - Full RTL support
- 🇺🇸 English (en-US) - LTR support
- Extensible i18n framework for additional languages

---

## 📖 Documentation

Each documentation file is a comprehensive guide:

| File | Purpose |
|------|---------|
| [01-SYSTEM_OVERVIEW.md](docs/01-SYSTEM_OVERVIEW.md) | Complete system architecture, principles, and roadmap |
| [02-DATABASE_SCHEMA.md](docs/02-DATABASE_SCHEMA.md) | Full database design with ERD and migrations |
| [03-SCORING_FORMULAS.md](docs/03-SCORING_FORMULAS.md) | Detailed formulas for all 10 scoring indices |
| [04-ARCHITECTURE.md](docs/04-ARCHITECTURE.md) | Backend, frontend, and AI architecture patterns |
| [05-ASSESSMENT_QUESTIONS.md](docs/05-ASSESSMENT_QUESTIONS.md) | All 100+ assessment questions with metadata |
| [06-DESIGN_SYSTEM.md](docs/06-DESIGN_SYSTEM.md) | Complete UI/UX design specifications and components |

---

## 🗺️ Implementation Roadmap

**Phase 1: Foundation** (Weeks 1-4) ✅
- System design and documentation
- Database schema and migrations
- Backend and frontend scaffolding
- Docker containerization

**Phase 2: Core Assessment** (Weeks 5-8)
- Assessment questionnaire engine
- Multi-source rating system
- Evidence upload functionality

**Phase 3: AI Engine** (Weeks 9-12)
- Answer classification and analysis
- Consistency and contradiction detection
- Insight generation

**Phase 4: Analytics & Scoring** (Weeks 13-16)
- Implement all 10 scoring indices
- Gap analysis engine
- Risk assessment system

**Phase 5: Dashboard & Reports** (Weeks 17-20)
- Executive dashboard (5 views)
- Interactive visualizations
- Automated report generation

**Phase 6-7: Admin & Launch** (Weeks 21-24)
- Administration panel
- Performance optimization
- Security hardening
- Production deployment

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🙏 Credits

Design inspired by McKinsey, Deloitte, PwC, SAP SuccessFactors, and Workday enterprise platforms.

Built with ❤️ for better organizational performance management.

---

**Last Updated**: June 14, 2024  
**Version**: 1.0.0 - Foundation Release