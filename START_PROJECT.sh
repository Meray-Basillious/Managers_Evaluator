#!/bin/bash

# مقيم الأداء - Performance Evaluator
# Project Startup Script

echo "============================================"
echo "مقيم الأداء - Performance Evaluator"
echo "Project Startup Script"
echo "============================================"
echo ""

# Check if PostgreSQL is running
if ! docker ps | grep -q "managers_evaluator_postgres"; then
    echo "🚀 Starting PostgreSQL database..."
    docker run -d \
      --name managers_evaluator_postgres \
      -e POSTGRES_USER=postgres \
      -e POSTGRES_PASSWORD=postgres \
      -e POSTGRES_DB=managers_evaluator \
      -p 5432:5432 \
      postgres:16-alpine
    sleep 3
    echo "✓ PostgreSQL started"
else
    echo "✓ PostgreSQL already running"
fi

echo ""
echo "To run all services, open 3 separate terminals and run:"
echo ""
echo "Terminal 1 - Backend API (port 5000):"
echo "  cd /workspaces/Managers_Evaluator/backend"
echo "  npm run dev"
echo ""
echo "Terminal 2 - Frontend (port 3000):"
echo "  cd /workspaces/Managers_Evaluator/frontend"
echo "  npm run dev"
echo ""
echo "Terminal 3 - AI Engine (port 8000):"
echo "  cd /workspaces/Managers_Evaluator/ai-engine"
echo "  python src/main.py"
echo ""
echo "============================================"
echo "Access Points:"
echo "============================================"
echo "Frontend:  http://localhost:3000"
echo "Backend:   http://localhost:5000"
echo "AI Engine: http://localhost:8000"
echo "Database:  localhost:5432"
echo ""
echo "============================================"
