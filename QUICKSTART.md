# Implementation Quick Start Guide

## 🚀 Getting Started with مقيم الأداء

This guide will help you get the platform up and running quickly.

---

## Step 1: Environment Setup

### Clone the Repository
```bash
git clone https://github.com/Meray-Basillious/Managers_Evaluator.git
cd Managers_Evaluator
```

### Copy Environment Files
```bash
# Backend
cd backend
cp .env.example .env

# Configure your database
nano .env
```

**Key Environment Variables to Set:**
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=managers_evaluator
JWT_SECRET=your_very_long_secret_key_min_32_chars
FRONTEND_URL=http://localhost:3000
```

---

## Step 2: Database Setup

### Option A: Using Docker
```bash
docker run -d \
  --name postgres_evaluator \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=managers_evaluator \
  -p 5432:5432 \
  postgres:16-alpine
```

### Option B: Local PostgreSQL
```bash
# Create database
createdb -U postgres managers_evaluator

# Run migrations
cd backend
npm run db:migrate
```

---

## Step 3: Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
```

**Backend should now be running on http://localhost:5000**

---

## Step 4: Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

**Frontend should now be running on http://localhost:3000**

---

## Step 5: AI Engine Setup

```bash
cd ai-engine

# Create virtual environment
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows

# Install dependencies
pip install -r requirements.txt

# Download required NLP models
python -m spacy download en_core_web_sm

# Start AI service
python src/main.py
```

**AI Engine should now be running on http://localhost:8000**

---

## Verification

### Check Backend API
```bash
curl http://localhost:5000/health
# Expected: {"status":"ok","timestamp":"...","uptime":...}
```

### Check AI Engine
```bash
curl http://localhost:8000/health
# Expected: {"status":"healthy","service":"AI Engine"}
```

### Check Frontend
Open http://localhost:3000 in your browser

---

## Common Issues & Troubleshooting

### Issue: Port Already in Use

```bash
# Kill process on port
lsof -ti:5000 | xargs kill -9  # Port 5000
lsof -ti:3000 | xargs kill -9  # Port 3000
lsof -ti:8000 | xargs kill -9  # Port 8000
```

### Issue: Database Connection Error

1. Verify PostgreSQL is running: `psql -U postgres`
2. Check credentials in `.env`
3. Verify database exists: `psql -U postgres -l | grep managers_evaluator`

### Issue: Node Modules Issues

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Python Virtual Environment

```bash
# Deactivate current environment
deactivate

# Remove and recreate
rm -rf venv
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

---

## Next Steps

1. **Read the Documentation**: Start with [System Overview](docs/01-SYSTEM_OVERVIEW.md)
2. **Create a Test User**: Visit http://localhost:3000 and register
3. **Create an Assessment**: Follow the assessment wizard
4. **Explore APIs**: Check [API Documentation](docs/04-ARCHITECTURE.md#api-endpoints)
5. **Review Code**: Explore backend/src/routes for API patterns

---

## Development Workflow

### Running Tests
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# AI tests (when available)
cd ai-engine
pytest
```

### Code Formatting
```bash
# Backend
npm run lint
npm run format

# Frontend
npm run lint
npm run format
```

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add your feature description"

# Push and create PR
git push origin feature/your-feature-name
```

---

## Docker Development

### Full Stack with Docker

```bash
# Start all services
docker-compose -f docker/docker-compose.yml up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild images
docker-compose build --no-cache
```

### Running Commands in Docker
```bash
# Run migrations
docker exec managers_evaluator_backend npm run db:migrate

# Access database
docker exec -it managers_evaluator_postgres psql -U postgres -d managers_evaluator

# View API logs
docker logs -f managers_evaluator_backend
```

---

## Useful Commands

### Database
```bash
# Connect to database
psql -U postgres -d managers_evaluator

# Run SQL file
psql -U postgres -d managers_evaluator -f database/migrations/001_init_schema.sql

# Backup database
pg_dump -U postgres managers_evaluator > backup.sql

# Restore database
psql -U postgres managers_evaluator < backup.sql
```

### Backend Development
```bash
# Watch mode
npm run dev

# Build TypeScript
npm run build

# Start production build
npm start

# Check linting errors
npm run lint

# Fix linting errors
npm run lint:fix
```

### Frontend Development
```bash
# Development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
tsc --noEmit

# Run tests
npm test
```

---

## Architecture Overview

The platform consists of three main services:

### 1. **Backend API** (Port 5000)
- Express.js + TypeScript
- RESTful API endpoints
- Database ORM (TypeORM)
- JWT authentication
- Business logic

### 2. **Frontend** (Port 3000)
- React 18 + TypeScript
- Redux state management
- Responsive UI
- Arabic/English support
- Real-time updates

### 3. **AI Engine** (Port 8000)
- FastAPI + Python
- NLP analysis
- Scoring algorithms
- Insight generation
- Async processing

### 4. **Database** (Port 5432)
- PostgreSQL 16
- Role-based security
- Data encryption
- Backup support

---

## Deployment Checklist

- [ ] Review all documentation
- [ ] Update .env with production values
- [ ] Run full test suite
- [ ] Build and test Docker images
- [ ] Set up PostgreSQL backups
- [ ] Configure SSL/TLS certificates
- [ ] Set up monitoring and logging
- [ ] Perform security audit
- [ ] Load test the platform
- [ ] Create disaster recovery plan

---

## Additional Resources

- 📖 [Full System Documentation](docs/)
- 🏗️ [Architecture Guide](docs/04-ARCHITECTURE.md)
- 📊 [Scoring Formulas](docs/03-SCORING_FORMULAS.md)
- 🎨 [Design System](docs/06-DESIGN_SYSTEM.md)
- ❓ [Assessment Questions](docs/05-ASSESSMENT_QUESTIONS.md)

---

## Support

For issues, questions, or suggestions:
1. Check the troubleshooting section above
2. Review relevant documentation file
3. Create an issue on GitHub
4. Contact support team

---

**Happy Development! 🚀**

