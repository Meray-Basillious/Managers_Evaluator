# Scoring Formulas & Analytics - مقيم الأداء

## Overview

The system calculates 10 key indices, each on a 0-100 scale. These indices are derived from question responses, AI analysis, evidence, and KPI data.

---

## 1. JOB SIZE INDEX (0-100)

**Purpose**: Determines the objective size of the role based on scope, authority, and responsibility.

### Formula Components

```
Job Size Index = (
    (Authority Weight × Authority Score) +
    (Resource Weight × Resource Score) +
    (Responsibility Weight × Responsibility Score) +
    (Complexity Weight × Complexity Score) +
    (Budget Weight × Budget Score)
) / 100

Weights Distribution:
- Authority: 25%
- Resources: 20%
- Responsibility: 25%
- Complexity: 15%
- Budget: 15%
```

### Sub-Score Calculations

#### Authority Score (Q7, Q8, Q19, Q20)
```
Authority Score = (
    Decision Impact (0-30) +
    Financial Impact (0-30) +
    Risk Level (0-20) +
    Decision Frequency (0-20)
) / 100

Decision Impact Mapping:
- Strategic (affects org): 30
- Operational (affects dept): 20
- Tactical (affects team): 10
- Routine (affects self): 5

Financial Impact Mapping:
- >50% budget: 30
- 20-50% budget: 20
- 5-20% budget: 10
- <5% budget: 5

Risk Level (based on consequence severity):
- Critical risk: 20
- High risk: 15
- Medium risk: 10
- Low risk: 5

Decision Frequency:
- Daily/constant: 20
- Weekly: 15
- Monthly: 10
- Quarterly: 5
```

#### Resource Score (Q9, Q10, Q11)
```
Resource Score = (
    (Employee Count Score) +
    (Budget Responsibility Score) +
    (Resource Stability Score)
) / 3

Employee Count Score:
- 500+ direct reports: 100
- 200-499: 80
- 100-199: 60
- 50-99: 40
- 20-49: 30
- 10-19: 20
- 5-9: 10
- 1-4: 5
- 0: 0

Budget Responsibility Score:
- >$10M: 100
- $5M-$10M: 80
- $1M-$5M: 60
- $500K-$1M: 40
- $100K-$500K: 25
- $10K-$100K: 10
- <$10K: 0

Resource Stability Score (Question 11 answers):
- Stable/predictable: 100
- Occasional changes: 70
- Frequent changes: 40
- Constant flux: 20
```

#### Responsibility Score (Q2, Q3, Q4)
```
Responsibility Score = (
    (Unique Responsibility %) × 100 +
    (Classification Distribution Score)
) / 2

Classification Distribution Score:
Strategic responsibilities >40%: 100
Leadership responsibilities >30%: 85
Managerial responsibilities >25%: 60
Supervisory responsibilities >15%: 40
Operational responsibility >70%: Negative flag (deduct 20)

Unique Responsibility % = (Count of responsibilities only this person can do / Total responsibilities) × 100
```

#### Complexity Score (Q3, Q4, Q6, Q11)
```
Complexity Index = (
    (Operational Complexity) +
    (Stakeholder Complexity) +
    (Decision Complexity) +
    (Change Management Complexity)
) / 4

Operational Complexity (based on classification):
- Pure operational: 20
- Operational + Supervisory: 40
- Operational + Managerial: 60
- Managerial + Leadership: 75
- Strategic/Leadership: 90

Stakeholder Complexity (count of distinct stakeholders):
- <3 stakeholder groups: 20
- 3-5 groups: 40
- 5-8 groups: 60
- 8-12 groups: 80
- >12 groups: 100

Decision Complexity (from Q20):
- Routine decisions: 20
- Complex with precedent: 40
- Complex without precedent: 60
- High-stakes strategic: 80
- Cross-organizational strategic: 100

Change Management Complexity (based on Q15, Q16):
- Minimal change: 20
- Occasional projects: 40
- Multiple concurrent projects: 60
- Complex transformation: 80
- Organizational restructuring: 100
```

#### Budget Score (Q10)
```
Budget Score = (Budget Responsibility / Max Budget in Organization) × 100
```

---

## 2. LEADERSHIP INDEX (0-100)

**Purpose**: Measures leadership capability and maturity.

### Formula Components

```
Leadership Index = (
    (Vision Weight × Vision Score) +
    (Strategic Weight × Strategic Score) +
    (Development Weight × Development Score) +
    (Influence Weight × Influence Score) +
    (Time Allocation Weight × Time Allocation Score)
) / 100

Weights Distribution:
- Vision: 20%
- Strategic Thinking: 25%
- Talent Development: 20%
- Influence: 20%
- Time Allocation: 15%
```

### Sub-Score Calculations

#### Vision Score (Q17, Q18)
```
Vision Score = (
    (Specificity × 25) +
    (Measurability × 25) +
    (Realism × 25) +
    (Business Alignment × 25)
) / 100

Each criterion rated 1-10 based on:
Specificity: Clear, detailed vision vs. vague
Measurability: Quantifiable objectives vs. subjective
Realism: Achievable within resources vs. unrealistic
Business Alignment: Links to org strategy vs. isolated goals
```

#### Strategic Score (Q3, Q12, Q17, Q18)
```
Strategic Score = (
    (Strategic Thinking) +
    (Long-term Planning) +
    (Achievement of Strategic Goals)
) / 3

Strategic Thinking (based on Q3 classification and Q17):
- Mostly operational: 10
- Some tactical: 30
- Significant managerial: 50
- Strong leadership: 75
- Visionary strategic: 95

Long-term Planning (from Q18):
- No planning: 0
- 1-month horizon: 20
- 3-month horizon: 40
- 6-month horizon: 60
- 12+ month horizon: 80

Achievement of Strategic Goals (from Q12 evidence):
Based on business impact and sustainability of achievements.
```

#### Development Score (Q12, Q14, Q16)
```
Development Score = (
    (Personal Development Investment) +
    (Team Development Investment) +
    (Problem Solving Approach)
) / 3

Personal Development Investment:
- No evidence: 10
- Minimal effort: 30
- Regular activities: 50
- Structured program: 75
- Mentorship/coaching: 95

Team Development Investment:
- Minimal/none: 10
- Training programs: 40
- Coaching individuals: 60
- Structured succession planning: 80
- Comprehensive talent development: 95

Problem Solving Approach (from Q14-Q16):
- Always escalates: 10
- Escalates quickly: 30
- Attempts some solutions: 50
- Systematically problem-solves: 75
- Prevents problems proactively: 95
```

#### Influence Score (Q7, Q20, Demographics)
```
Influence Score = (
    (Formal Authority) +
    (Informal Influence) +
    (Cross-organizational Reach)
) / 3

Formal Authority: Based on hierarchical level and authority score
Informal Influence: Based on decision complexity and stakeholder count
Cross-organizational Reach: Based on stakeholder diversity and external relationships
```

#### Time Allocation Score (Q5, Q6)
```
Time Allocation Score = (
    100 - |Development & Planning Actual - Development & Planning Optimal| -
    Operational Overload Penalty
)

Optimal Distribution (from Q5):
- Development/Planning: 30-40%
- Training/Mentoring: 15-20%
- Strategic: 15-20%
- Problem Solving: 10-15%
- Operational: <10%

Penalties:
- Operational >70%: -30 points
- Operational >80%: -40 points
- Development/Training <10%: -20 points

Captured in Q6 answers about time consumption reasons.
```

---

## 3. MANAGERIAL MATURITY (0-100)

**Purpose**: Assesses management effectiveness and professional development.

### Formula Components

```
Managerial Maturity = (
    (Decision Making Weight × Decision Making Score) +
    (Team Management Weight × Team Management Score) +
    (Change Management Weight × Change Management Score) +
    (Performance Management Weight × Performance Management Score) +
    (Business Acumen Weight × Business Acumen Score)
) / 100

Weights Distribution:
- Decision Making: 25%
- Team Management: 25%
- Change Management: 20%
- Performance Management: 15%
- Business Acumen: 15%
```

### Sub-Score Calculations

#### Decision Making Score (Q19, Q20, Q7)
```
Decision Making Score = (
    (Decision Quality) +
    (Decision Autonomy) +
    (Decision Speed)
) / 3

Decision Quality (rated 1-10):
- Makes vs. executes decisions
- Impact of past decisions
- Evidence of analysis

Decision Autonomy:
- All decisions delegated: 10
- 50% independent: 50
- 75% independent: 75
- 90%+ independent: 95

Decision Speed (from top 3 decisions):
- Very fast (<1 week): 95
- Fast (1-2 weeks): 75
- Moderate (2-4 weeks): 50
- Slow (>4 weeks): 25
```

#### Team Management Score (Q3, Q4, Demographics)
```
Team Management Score = (
    (Team Organization) +
    (Delegation Effectiveness) +
    (Team Stability)
) / 3

Team Organization:
- No clear structure: 20
- Basic structure: 40
- Well-organized: 70
- Optimized with clear roles: 90

Delegation Effectiveness (from Q4):
- Cannot delegate: 10
- 25% can be delegated: 25
- 50% can be delegated: 50
- 75% can be delegated: 75
- 90%+ can be delegated: 95

Team Stability:
- High turnover >30%: 20
- Moderate 15-30%: 40
- Stable 5-15%: 70
- Very stable <5%: 95
```

#### Change Management Score (Q14, Q15, Q16)
```
Change Management Score = (
    (Problem Recognition) +
    (Solution Development) +
    (Implementation Effectiveness)
) / 3

Each component rated 1-10 based on evidence and descriptions.
```

#### Performance Management Score (Q3, Q12)
```
Performance Management Score = (
    (Goal Setting Clarity) +
    (Performance Monitoring) +
    (Feedback & Development)
) / 3

Based on evidence from achievements and responsibility descriptions.
```

#### Business Acumen Score (Q7, Q10, Q12, Q17)
```
Business Acumen Score = (
    (Financial Understanding) +
    (Business Impact Awareness) +
    (Strategic Alignment)
) / 3

Financial Understanding (from Q10, Q12):
- Limited: 20
- Moderate: 40
- Strong: 70
- Expert: 95

Business Impact Awareness (from Q12 achievements):
- Local/team impact only: 20
- Department impact: 40
- Organizational impact: 70
- Strategic/market impact: 95

Strategic Alignment (from Q17, Q18):
- Misaligned: 10
- Partially aligned: 40
- Well-aligned: 70
- Highly strategic: 95
```

---

## 4. DECISION AUTHORITY (0-100)

**Purpose**: Quantifies the scope and nature of autonomous decision-making.

### Formula
```
Decision Authority = (
    (Decision Count Score × 20) +
    (Decision Impact Score × 30) +
    (Financial Authority Score × 25) +
    (Risk Authority Score × 15) +
    (Decision Speed Score × 10)
) / 100

Decision Count (Q20 - Top 3 decisions):
- 1 major decision: 20
- 2-3 major decisions: 50
- 4-5 major decisions: 75
- 6+ major decisions: 100

Decision Impact (Q7, Q8):
- Team level: 30
- Department level: 60
- Organization level: 85
- Strategic/market level: 100

Financial Authority (Q10):
Calculate as percentage of organizational budget.

Risk Authority (Q8 - decision consequences):
- Low risk (<$100K impact): 20
- Medium risk ($100K-$1M): 40
- High risk ($1M-$10M): 60
- Critical risk (>$10M): 100

Decision Speed (Q20):
- Weekly or more frequent: 100
- Monthly: 75
- Quarterly: 50
- Annual or less: 25
```

---

## 5. COMPLEXITY INDEX (0-100)

**Purpose**: Measures organizational and operational complexity.

### Formula
```
Complexity Index = (
    (Organizational Complexity Weight × Org Complexity Score) +
    (Operational Complexity Weight × Op Complexity Score) +
    (Decision Complexity Weight × Decision Complexity Score) +
    (Stakeholder Complexity Weight × Stakeholder Score) +
    (Resource Volatility Weight × Volatility Score)
) / 100

Weights Distribution:
- Organizational: 25%
- Operational: 25%
- Decision: 20%
- Stakeholder: 15%
- Volatility: 15%
```

### Sub-Score Calculations

#### Organizational Complexity (Q11, Org Structure)
```
Org Complexity Score = (
    (Hierarchical Levels Below) +
    (Organizational Scope) +
    (Structural Complexity)
) / 3

Hierarchical Levels Below:
- 0-1 levels: 20
- 2 levels: 40
- 3 levels: 60
- 4 levels: 80
- 5+ levels: 100

Organizational Scope:
- Single team: 20
- Multiple teams: 40
- Department: 60
- Multiple departments: 80
- Cross-organizational: 100

Structural Complexity:
- Linear: 20
- Matrix (1 dimension): 50
- Matrix (2+ dimensions): 80
- Complex network: 100
```

#### Operational Complexity (Q3, Q6)
```
Operational Complexity Score = (
    (Process Variety) +
    (Process Standardization) +
    (Exception Handling)
) / 3

Process Variety:
- 1-2 process types: 20
- 3-5 process types: 40
- 6-10 process types: 60
- 11-20 process types: 80
- 20+ process types: 100

Process Standardization:
- Highly standardized: 20
- Mostly standardized: 40
- Partially standardized: 60
- Ad-hoc approach: 80
- Chaotic/undefined: 100

Exception Handling:
- Rare exceptions (<5%): 20
- Occasional (5-15%): 40
- Frequent (15-30%): 60
- Very frequent (30-50%): 80
- Mostly exceptions (>50%): 100
```

#### Decision Complexity (Q20)
```
Decision Complexity Score = Average complexity rating of top 3 decisions (1-10 scale)
Then convert to 0-100: (rating / 10) × 100
```

#### Stakeholder Complexity (Q7, Org Structure)
```
Stakeholder Complexity Score = (
    (Distinct Stakeholder Groups) +
    (Stakeholder Interdependency) +
    (External Stakeholders)
) / 3

Distinct Stakeholder Groups:
- <3: 20
- 3-5: 40
- 5-8: 60
- 8-12: 80
- >12: 100

Stakeholder Interdependency:
- Independent: 20
- Some coordination: 40
- Coordinated: 60
- Highly interdependent: 80
- Tightly coupled: 100

External Stakeholders:
- None: 0
- <5: 25
- 5-10: 50
- 10-20: 75
- >20: 100
```

#### Resource Volatility (Q11)
```
Resource Volatility Score (from Q11 answers):
- Stable: 10
- Minor fluctuations: 30
- Occasional significant changes: 50
- Frequent major changes: 75
- Constant restructuring: 100
```

---

## 6. PROMOTION READINESS (0-100)

**Purpose**: Determines likelihood of successful advancement.

### Formula
```
Promotion Readiness = (
    (Leadership Index × 0.25) +
    (Managerial Maturity × 0.20) +
    (Decision Authority × 0.20) +
    (Complexity Handling × 0.15) +
    (Gap Analysis Score × 0.20)
) × Achievement Multiplier × Readiness Multiplier

Achievement Multiplier = (Average KPI Performance) / 100
(Adjusts readiness based on actual results)

Readiness Multiplier =
- Performance issues: 0.7
- Normal performance: 1.0
- Exceptional performance: 1.15
```

### Readiness Status
```
100-90: Highly Ready
89-75: Ready
74-60: Developing
59-50: Early Development
<50: Not Ready
```

---

## 7. JOB VALUE (0-100)

**Purpose**: Calculates market value of the role.

### Formula
```
Job Value = (
    (Job Size Index × 0.30) +
    (Complexity Index × 0.20) +
    (Leadership Index × 0.20) +
    (Managerial Maturity × 0.15) +
    (Decision Authority × 0.15)
) × Industry Multiplier × Market Multiplier

Industry Multiplier: Based on industry (tech pays 1.2x, etc.)
Market Multiplier: Based on regional market rates
```

---

## 8. COMPENSATION FAIRNESS (0-100)

**Purpose**: Assesses whether compensation matches role value.

### Formula
```
Compensation Fairness = (Current Salary / Calculated Fair Value) × 100

Fair Value Calculation:
Base = Market Benchmark for Similar Roles
Adjustment = (Job Value / 50) × Multiplier
Fair Value = Base + Adjustment

Fairness Score Interpretation:
90-110: Fair compensation
111+: Overpaid
<90: Underpaid

Gap Amount = (Fair Value - Current Salary) / Current Salary × 100
```

---

## 9. KEY PERSON RISK (0-100)

**Purpose**: Measures dependency and succession planning risk.

### Formula
```
Key Person Risk = (
    (Knowledge Concentration × 0.35) +
    (Delegation Capability × 0.25) +
    (Succession Readiness × 0.25) +
    (Cross-training Status × 0.15)
) × Turnover History Multiplier

Knowledge Concentration = (
    Unique responsibilities / Total responsibilities
) × 100

Delegation Capability = 100 - Delegation Effectiveness Score

Succession Readiness:
- No backup identified: 100
- Backup identified, untrained: 75
- Backup identified, partially trained: 50
- Backup identified, fully trained: 25
- Multiple backup options: 10

Cross-training Status:
- None: 100
- <25%: 75
- 25-50%: 50
- 50-75%: 25
- >75%: 10

Turnover History Multiplier:
- Recently departed: 1.5
- History of departures: 1.3
- Stable: 1.0
- Long tenure: 0.8

Risk Level:
90-100: Critical risk
75-89: High risk
50-74: Medium risk
25-49: Low risk
<25: Minimal risk
```

---

## 10. ORGANIZATIONAL INFLUENCE (0-100)

**Purpose**: Measures impact and reach within organization.

### Formula
```
Organizational Influence = (
    (Direct Authority × 0.25) +
    (Stakeholder Reach × 0.20) +
    (Decision Impact × 0.20) +
    (Cross-functional Collaboration × 0.20) +
    (External Representation × 0.15)
) / 100

Direct Authority = (Team Size / Max Team Size in Organization) × 100

Stakeholder Reach = (Distinct Stakeholder Groups / Max Possible) × 100

Decision Impact = (Calculated from Q7, Q8, Q20) / 100

Cross-functional Collaboration = (From assessment responses) / 100

External Representation = (External relationships / Expected for role) × 100
```

---

## AI-Powered Analytics

### Consistency Score
```
Consistency Score = (
    (Employee vs Manager Alignment) +
    (Manager vs Senior Mgmt Alignment) +
    (Answers vs Evidence Alignment) +
    (Answers vs KPI Alignment) +
    (Internal Logic Consistency)
) / 5

Each component: 0-100 based on correlation analysis
```

### Confidence Level
```
Confidence = (
    (Data Completeness × 0.30) +
    (Consistency Score × 0.40) +
    (Evidence Quality × 0.20) +
    (Stakeholder Agreement × 0.10)
) / 100

Data Completeness: Percentage of questions answered
Evidence Quality: Quality score of uploaded evidence
Stakeholder Agreement: Correlation of stakeholder ratings
```

### Gap Analysis
```
Alignment % = (Absolute difference between scores / 100) × -1 + 100
Perception Gap % = |Employee Score - Manager Score| / 100 × -1 + 100
Organizational Gap % = |Manager Score - Senior Mgmt Score| / 100 × -1 + 100

Risk Assessment:
Gap >40%: High risk, intervention needed
Gap 20-40%: Medium risk, clarification needed
Gap <20%: Low risk, healthy alignment
```

---

## Implementation Notes

1. All formulas use weighted averages with transparent weightings
2. Scores are normalized to 0-100 scale for consistency
3. Sub-scores feed into main indices
4. AI analysis validates and flags anomalies
5. Confidence levels accompany all scores
6. Formulas are auditable and can be recalculated
7. Historical tracking enables trend analysis
8. Thresholds and weights are configurable per organization

