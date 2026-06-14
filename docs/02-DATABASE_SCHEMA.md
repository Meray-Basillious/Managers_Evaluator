# Database Schema - مقيم الأداء

## Entity Relationship Diagram

```
USERS
├─ id (PK)
├─ email (UNIQUE)
├─ password_hash
├─ first_name_ar
├─ last_name_ar
├─ first_name_en
├─ last_name_en
├─ role (employee, manager, senior_manager, hr, consultant, admin)
├─ department_id (FK)
├─ manager_id (FK → Users)
├─ status (active, inactive, archived)
├─ created_at
├─ updated_at
└─ deleted_at

ORGANIZATIONS
├─ id (PK)
├─ name_ar
├─ name_en
├─ industry
├─ size (small, medium, large, enterprise)
├─ country
├─ currency
├─ created_at
└─ updated_at

DEPARTMENTS
├─ id (PK)
├─ organization_id (FK)
├─ name_ar
├─ name_en
├─ parent_department_id (FK)
├─ head_id (FK → Users)
├─ budget
├─ employee_count
├─ created_at
└─ updated_at

ASSESSMENTS
├─ id (PK)
├─ organization_id (FK)
├─ employee_id (FK → Users)
├─ assessment_type (manager_evaluation, role_evaluation, compensation_review)
├─ status (draft, in_progress, pending_manager_review, pending_senior_review, completed, archived)
├─ created_at
├─ updated_at
├─ submitted_at
├─ completed_at
├─ created_by (FK → Users)
└─ updated_by (FK → Users)

ASSESSMENT_DIMENSIONS
├─ id (PK)
├─ assessment_id (FK)
├─ dimension_name_ar
├─ dimension_name_en
├─ dimension_code (job_identity, responsibilities, time_analysis, authority, resources, achievements, obstacles, vision, decision_making)
├─ order_index
└─ status (not_started, in_progress, completed)

QUESTIONS
├─ id (PK)
├─ dimension_id (FK)
├─ question_text_ar
├─ question_text_en
├─ question_code
├─ question_type (text, multi_select, single_select, rating, date, file_upload)
├─ order_index
├─ required (boolean)
├─ help_text_ar
├─ help_text_en
└─ evidence_type (optional, required, none)

ANSWERS
├─ id (PK)
├─ assessment_id (FK)
├─ question_id (FK)
├─ respondent_type (employee, manager, senior_manager)
├─ respondent_id (FK → Users)
├─ answer_text
├─ answer_value (for numeric answers)
├─ rating (1-10)
├─ confidence_level (1-10)
├─ submitted_at
└─ updated_at

EVIDENCE
├─ id (PK)
├─ answer_id (FK)
├─ assessment_id (FK)
├─ file_url
├─ file_type (pdf, image, spreadsheet, document)
├─ file_name
├─ file_size
├─ description_ar
├─ description_en
├─ uploaded_by (FK → Users)
├─ uploaded_at
└─ verified (boolean)

KPI_DATA
├─ id (PK)
├─ assessment_id (FK)
├─ employee_id (FK)
├─ kpi_name_ar
├─ kpi_name_en
├─ kpi_code
├─ target_value
├─ actual_value
├─ unit
├─ measurement_period
├─ performance_percentage (0-150)
├─ trend (up, down, stable)
├─ notes
├─ data_date
└─ uploaded_by (FK → Users)

AI_ANALYSIS
├─ id (PK)
├─ assessment_id (FK)
├─ analysis_type (answer_classification, consistency_score, contradiction_detection, exaggeration_detection, insight_generation)
├─ result_json
├─ confidence_score (0-100)
├─ created_at
└─ updated_at

GAP_ANALYSIS
├─ id (PK)
├─ assessment_id (FK)
├─ dimension (job_size, leadership, managerial_maturity, decision_authority, complexity)
├─ employee_score
├─ manager_score
├─ senior_mgmt_score
├─ alignment_percentage
├─ perception_gap_percentage
├─ confidence_percentage
├─ risk_percentage
├─ gap_interpretation_ar
├─ gap_interpretation_en
├─ created_at
└─ updated_at

SCORING_RESULTS
├─ id (PK)
├─ assessment_id (FK)
├─ job_size_index (0-100)
├─ leadership_index (0-100)
├─ managerial_maturity (0-100)
├─ decision_authority (0-100)
├─ complexity_index (0-100)
├─ promotion_readiness (0-100)
├─ job_value (0-100)
├─ compensation_fairness (0-100)
├─ key_person_risk (0-100)
├─ organizational_influence (0-100)
├─ overall_score (0-100)
├─ created_at
└─ updated_at

PROMOTION_RECOMMENDATIONS
├─ id (PK)
├─ assessment_id (FK)
├─ promotion_readiness_score (0-100)
├─ readiness_status (not_ready, developing, ready, highly_ready)
├─ recommended_position_ar
├─ recommended_position_en
├─ timeline_months
├─ development_gaps (json array)
├─ prerequisites (json array)
├─ notes
├─ created_at
└─ updated_at

COMPENSATION_RECOMMENDATIONS
├─ id (PK)
├─ assessment_id (FK)
├─ current_salary
├─ current_salary_percentile (0-100)
├─ market_benchmark
├─ recommended_salary
├─ salary_adjustment_percentage
├─ adjustment_justification_ar
├─ adjustment_justification_en
├─ bonus_structure
├─ benefits_recommendation
├─ created_at
└─ updated_at

RISK_ASSESSMENT
├─ id (PK)
├─ assessment_id (FK)
├─ key_person_risk_score (0-100)
├─ risk_level (low, medium, high, critical)
├─ risk_factors (json array)
├─ succession_plan_status (not_planned, in_progress, ready)
├─ backup_person_id (FK → Users, nullable)
├─ risk_mitigation_plan_ar
├─ risk_mitigation_plan_en
├─ created_at
└─ updated_at

EXECUTIVE_REPORTS
├─ id (PK)
├─ assessment_id (FK)
├─ report_type (executive_summary, detailed_analysis, promotion_report, compensation_report, risk_report, development_plan)
├─ generated_at
├─ generated_by (FK → Users)
├─ report_content_html
├─ report_content_json
├─ pdf_url
├─ shared_with (json array of user_ids)
└─ created_at

AUDIT_LOG
├─ id (PK)
├─ assessment_id (FK)
├─ user_id (FK)
├─ action (created, updated, submitted, reviewed, completed, archived)
├─ entity_type (assessment, answer, evidence, analysis)
├─ changes_json
├─ created_at
└─ ip_address

DASHBOARD_PREFERENCES
├─ id (PK)
├─ user_id (FK)
├─ dashboard_view (ceo, hr, consultant, manager, employee)
├─ widget_layout (json)
├─ default_filters (json)
├─ created_at
└─ updated_at

ORGANIZATION_ANALYTICS
├─ id (PK)
├─ organization_id (FK)
├─ analytics_date
├─ total_assessments
├─ completed_assessments
├─ average_job_size_index
├─ average_leadership_index
├─ average_managerial_maturity
├─ promotion_readiness_distribution (json)
├─ compensation_fairness_distribution (json)
├─ risk_summary (json)
├─ department_comparison (json)
└─ created_at

```

---

## Core Tables Detail

### USERS Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name_ar VARCHAR(100),
    last_name_ar VARCHAR(100),
    first_name_en VARCHAR(100),
    last_name_en VARCHAR(100),
    role VARCHAR(50) NOT NULL DEFAULT 'employee',
    department_id UUID REFERENCES departments(id),
    manager_id UUID REFERENCES users(id),
    status VARCHAR(50) DEFAULT 'active',
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP,
    CONSTRAINT valid_role CHECK (role IN ('employee', 'manager', 'senior_manager', 'hr', 'consultant', 'admin'))
);
```

### ASSESSMENTS Table
```sql
CREATE TABLE assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id),
    employee_id UUID NOT NULL REFERENCES users(id),
    assessment_type VARCHAR(100) NOT NULL,
    status VARCHAR(100) DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    submitted_at TIMESTAMP,
    completed_at TIMESTAMP,
    created_by UUID NOT NULL REFERENCES users(id),
    updated_by UUID REFERENCES users(id),
    CONSTRAINT valid_status CHECK (status IN ('draft', 'in_progress', 'pending_manager_review', 'pending_senior_review', 'completed', 'archived'))
);

CREATE INDEX idx_assessments_employee ON assessments(employee_id);
CREATE INDEX idx_assessments_organization ON assessments(organization_id);
CREATE INDEX idx_assessments_status ON assessments(status);
```

### ANSWERS Table
```sql
CREATE TABLE answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES questions(id),
    respondent_type VARCHAR(50) NOT NULL,
    respondent_id UUID NOT NULL REFERENCES users(id),
    answer_text TEXT,
    answer_value NUMERIC,
    rating INTEGER CHECK (rating >= 1 AND rating <= 10),
    confidence_level INTEGER CHECK (confidence_level >= 1 AND confidence_level <= 10),
    submitted_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT valid_respondent_type CHECK (respondent_type IN ('employee', 'manager', 'senior_manager'))
);

CREATE INDEX idx_answers_assessment ON answers(assessment_id);
CREATE INDEX idx_answers_respondent ON answers(respondent_id);
```

### AI_ANALYSIS Table
```sql
CREATE TABLE ai_analysis (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    analysis_type VARCHAR(100) NOT NULL,
    result_json JSONB NOT NULL,
    confidence_score NUMERIC CHECK (confidence_score >= 0 AND confidence_score <= 100),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_ai_analysis_assessment ON ai_analysis(assessment_id);
```

### SCORING_RESULTS Table
```sql
CREATE TABLE scoring_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id UUID NOT NULL UNIQUE REFERENCES assessments(id) ON DELETE CASCADE,
    job_size_index NUMERIC CHECK (job_size_index >= 0 AND job_size_index <= 100),
    leadership_index NUMERIC CHECK (leadership_index >= 0 AND leadership_index <= 100),
    managerial_maturity NUMERIC CHECK (managerial_maturity >= 0 AND managerial_maturity <= 100),
    decision_authority NUMERIC CHECK (decision_authority >= 0 AND decision_authority <= 100),
    complexity_index NUMERIC CHECK (complexity_index >= 0 AND complexity_index <= 100),
    promotion_readiness NUMERIC CHECK (promotion_readiness >= 0 AND promotion_readiness <= 100),
    job_value NUMERIC CHECK (job_value >= 0 AND job_value <= 100),
    compensation_fairness NUMERIC CHECK (compensation_fairness >= 0 AND compensation_fairness <= 100),
    key_person_risk NUMERIC CHECK (key_person_risk >= 0 AND key_person_risk <= 100),
    organizational_influence NUMERIC CHECK (organizational_influence >= 0 AND organizational_influence <= 100),
    overall_score NUMERIC CHECK (overall_score >= 0 AND overall_score <= 100),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_scoring_results_assessment ON scoring_results(assessment_id);
```

---

## Key Features

1. **Audit Trail**: Every change tracked in AUDIT_LOG
2. **Multi-source**: Support for employee, manager, and senior management perspectives
3. **Evidence Management**: File uploads and KPI data linked to assessments
4. **AI Integration**: AI analysis results stored separately for transparency
5. **Gap Analysis**: Automatically tracks differences between stakeholder views
6. **Comprehensive Scoring**: 10 distinct scoring indices
7. **Extensibility**: JSON fields for custom data without schema migrations
8. **Performance**: Strategic indexing for query optimization
9. **Data Integrity**: Foreign keys and constraints ensure consistency
10. **Compliance**: Soft deletion with deleted_at for data retention

---

## Database Initialization

All migrations will be stored in `/database/migrations/` directory with timestamp prefixes:
- `001_create_base_tables.sql`
- `002_create_assessment_tables.sql`
- `003_create_scoring_tables.sql`
- `004_create_analytics_tables.sql`
- `005_create_indexes_and_constraints.sql`

