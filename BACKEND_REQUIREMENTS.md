# Backend Requirements & API Specifications

## Overview
This document outlines all data requirements, API endpoints, and database schema needed to support the CareerQuest frontend application.

---

## 1. Authentication Module

### Features
- User registration (Student/Recruiter/Admin)
- Login with email/password
- Logout
- Password reset
- Session management
- Role-based access control

### API Endpoints

#### POST /api/auth/register
**Request:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "role": "student | recruiter | admin"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Account created successfully",
  "userId": "string"
}
```

#### POST /api/auth/login
**Request:**
```json
{
  "email": "string",
  "password": "string"
}
```
**Response:**
```json
{
  "success": true,
  "token": "jwt_token",
  "user": {
    "id": "string",
    "email": "string",
    "name": "string",
    "role": "student | recruiter | admin"
  }
}
```

#### POST /api/auth/logout
**Request:** Bearer token in header
**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

#### POST /api/auth/forgot-password
**Request:**
```json
{
  "email": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Reset link sent to email"
}
```

#### POST /api/auth/reset-password
**Request:**
```json
{
  "token": "string",
  "newPassword": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Password reset successfully"
}
```

### Database Schema

**users table:**
```sql
id: UUID PRIMARY KEY
email: VARCHAR(255) UNIQUE NOT NULL
password_hash: VARCHAR(255) NOT NULL
first_name: VARCHAR(100)
last_name: VARCHAR(100)
role: ENUM('student', 'recruiter', 'admin')
created_at: TIMESTAMP
updated_at: TIMESTAMP
last_login: TIMESTAMP
is_active: BOOLEAN DEFAULT true
```

---

## 2. Job Management Module

### Features
- Browse jobs with search/filter
- View job details
- Post new jobs (recruiters)
- Edit jobs (recruiters)
- Delete jobs (recruiters)
- Apply to jobs (students)
- Save jobs for later (students)

### API Endpoints

#### GET /api/jobs
**Query Parameters:**
- search: string (optional)
- location: string (optional)
- type: string (optional) - "full-time", "part-time", "contract", "internship"
- page: number (default: 1)
- limit: number (default: 10)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "company": "string",
      "companyId": "string",
      "location": "string",
      "type": "string",
      "salary": "string",
      "postedAt": "timestamp",
      "skills": ["string"],
      "description": "string"
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

#### GET /api/jobs/:id
**Response:**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "company": "string",
    "companyId": "string",
    "location": "string",
    "type": "string",
    "salary": "string",
    "postedAt": "timestamp",
    "deadline": "timestamp",
    "skills": ["string"],
    "description": "string",
    "responsibilities": ["string"],
    "requirements": ["string"],
    "benefits": ["string"],
    "companyInfo": {
      "name": "string",
      "size": "string",
      "industry": "string",
      "description": "string"
    }
  }
}
```

#### POST /api/jobs
**Request:** (Recruiter only)
```json
{
  "title": "string",
  "location": "string",
  "type": "string",
  "description": "string",
  "requirements": "string",
  "minSalary": "number",
  "maxSalary": "number",
  "skills": ["string"],
  "deadline": "date",
  "positions": "number"
}
```
**Response:**
```json
{
  "success": true,
  "jobId": "string",
  "message": "Job posted successfully"
}
```

#### PUT /api/jobs/:id
**Request:** (Recruiter only - own jobs)
```json
{
  "title": "string",
  "location": "string",
  "type": "string",
  "description": "string",
  "requirements": "string",
  "minSalary": "number",
  "maxSalary": "number",
  "skills": ["string"],
  "deadline": "date"
}
```

#### DELETE /api/jobs/:id
**Request:** (Recruiter only - own jobs)
**Response:**
```json
{
  "success": true,
  "message": "Job deleted successfully"
}
```

### Database Schema

**jobs table:**
```sql
id: UUID PRIMARY KEY
recruiter_id: UUID FOREIGN KEY (users.id)
company_id: UUID FOREIGN KEY (companies.id)
title: VARCHAR(255) NOT NULL
location: VARCHAR(255)
type: ENUM('full-time', 'part-time', 'contract', 'internship')
description: TEXT
requirements: TEXT
responsibilities: TEXT
benefits: TEXT
min_salary: DECIMAL
max_salary: DECIMAL
deadline: DATE
positions: INTEGER DEFAULT 1
status: ENUM('active', 'closed', 'draft') DEFAULT 'active'
views: INTEGER DEFAULT 0
created_at: TIMESTAMP
updated_at: TIMESTAMP
```

**job_skills table:**
```sql
id: UUID PRIMARY KEY
job_id: UUID FOREIGN KEY (jobs.id)
skill_name: VARCHAR(100)
```

---

## 3. Application Management Module

### Features
- Apply to jobs (students)
- Track application status
- View applications (students)
- View applicants (recruiters)
- Update application status (recruiters)

### API Endpoints

#### POST /api/applications
**Request:** (Student only)
```json
{
  "jobId": "string",
  "coverLetter": "string" (optional)
}
```
**Response:**
```json
{
  "success": true,
  "applicationId": "string",
  "message": "Application submitted successfully"
}
```

#### GET /api/applications/student
**Response:** (Student only)
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "jobTitle": "string",
      "company": "string",
      "location": "string",
      "appliedDate": "timestamp",
      "status": "applied | under_review | shortlisted | interview_scheduled | rejected | accepted"
    }
  ]
}
```

#### GET /api/applications/job/:jobId
**Response:** (Recruiter only - own jobs)
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "studentName": "string",
      "studentEmail": "string",
      "appliedDate": "timestamp",
      "status": "string",
      "matchPercentage": "number",
      "experience": "string"
    }
  ]
}
```

#### PUT /api/applications/:id/status
**Request:** (Recruiter only)
```json
{
  "status": "under_review | shortlisted | interview_scheduled | rejected | accepted"
}
```

### Database Schema

**applications table:**
```sql
id: UUID PRIMARY KEY
job_id: UUID FOREIGN KEY (jobs.id)
student_id: UUID FOREIGN KEY (users.id)
cover_letter: TEXT
status: ENUM('applied', 'under_review', 'shortlisted', 'interview_scheduled', 'rejected', 'accepted')
applied_at: TIMESTAMP
updated_at: TIMESTAMP
```

---

## 4. User Profile Module

### Features
- View profile (own/public)
- Edit profile
- Upload resume
- Manage skills
- Education history
- Work experience

### API Endpoints

#### GET /api/profile/:userId
**Response:**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "email": "string",
    "title": "string",
    "location": "string",
    "bio": "string",
    "phone": "string",
    "skills": ["string"],
    "experience": [
      {
        "title": "string",
        "company": "string",
        "period": "string",
        "description": "string"
      }
    ],
    "education": [
      {
        "degree": "string",
        "school": "string",
        "period": "string"
      }
    ],
    "resumeUrl": "string"
  }
}
```

#### PUT /api/profile
**Request:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "title": "string",
  "location": "string",
  "bio": "string",
  "phone": "string"
}
```

#### POST /api/profile/resume
**Request:** multipart/form-data
- file: File (PDF, DOC, DOCX, max 5MB)

**Response:**
```json
{
  "success": true,
  "resumeUrl": "string"
}
```

#### POST /api/profile/skills
**Request:**
```json
{
  "skills": ["string"]
}
```

#### POST /api/profile/experience
**Request:**
```json
{
  "title": "string",
  "company": "string",
  "startYear": "number",
  "endYear": "number",
  "description": "string"
}
```

#### POST /api/profile/education
**Request:**
```json
{
  "degree": "string",
  "school": "string",
  "major": "string",
  "startYear": "number",
  "graduationYear": "number"
}
```

### Database Schema

**profiles table:**
```sql
id: UUID PRIMARY KEY
user_id: UUID FOREIGN KEY (users.id) UNIQUE
title: VARCHAR(255)
location: VARCHAR(255)
bio: TEXT
phone: VARCHAR(20)
resume_url: VARCHAR(500)
profile_completion: INTEGER DEFAULT 0
created_at: TIMESTAMP
updated_at: TIMESTAMP
```

**skills table:**
```sql
id: UUID PRIMARY KEY
user_id: UUID FOREIGN KEY (users.id)
skill_name: VARCHAR(100)
```

**experience table:**
```sql
id: UUID PRIMARY KEY
user_id: UUID FOREIGN KEY (users.id)
title: VARCHAR(255)
company: VARCHAR(255)
start_year: INTEGER
end_year: INTEGER
description: TEXT
```

**education table:**
```sql
id: UUID PRIMARY KEY
user_id: UUID FOREIGN KEY (users.id)
degree: VARCHAR(255)
school: VARCHAR(255)
major: VARCHAR(255)
start_year: INTEGER
graduation_year: INTEGER
```

---

## 5. Company Management Module

### Features
- Browse companies
- View company profile
- Edit company profile (recruiters)

### API Endpoints

#### GET /api/companies
**Query Parameters:**
- search: string (optional)
- page: number
- limit: number

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "logo": "string",
      "industry": "string",
      "location": "string",
      "size": "string",
      "openJobs": "number",
      "description": "string"
    }
  ]
}
```

#### GET /api/companies/:id
**Response:**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "logo": "string",
    "industry": "string",
    "size": "string",
    "location": "string",
    "website": "string",
    "founded": "string",
    "description": "string",
    "culture": "string",
    "benefits": ["string"],
    "openJobs": [
      {
        "id": "string",
        "title": "string",
        "location": "string",
        "type": "string"
      }
    ]
  }
}
```

#### PUT /api/companies/:id
**Request:** (Recruiter only - own company)
```json
{
  "name": "string",
  "industry": "string",
  "size": "string",
  "location": "string",
  "website": "string",
  "description": "string",
  "culture": "string",
  "benefits": ["string"]
}
```

### Database Schema

**companies table:**
```sql
id: UUID PRIMARY KEY
name: VARCHAR(255) NOT NULL
logo_url: VARCHAR(500)
industry: VARCHAR(100)
size: VARCHAR(50)
location: VARCHAR(255)
website: VARCHAR(255)
founded: VARCHAR(10)
description: TEXT
culture: TEXT
created_at: TIMESTAMP
updated_at: TIMESTAMP
```

**company_benefits table:**
```sql
id: UUID PRIMARY KEY
company_id: UUID FOREIGN KEY (companies.id)
benefit: VARCHAR(255)
```

---

## 6. Dashboard Module

### Features
- Student dashboard (applications, recommendations)
- Recruiter dashboard (job postings, applicants)
- Admin dashboard (user management, statistics)

### API Endpoints

#### GET /api/dashboard/student
**Response:**
```json
{
  "success": true,
  "data": {
    "profileCompletion": 75,
    "totalApplications": 3,
    "savedJobs": 2,
    "profileViews": 12,
    "applications": [...],
    "recommendedJobs": [...],
    "savedJobs": [...]
  }
}
```

#### GET /api/dashboard/recruiter
**Response:**
```json
{
  "success": true,
  "data": {
    "activeJobs": 3,
    "totalApplicants": 105,
    "totalViews": 560,
    "shortlisted": 8,
    "jobPostings": [...],
    "recentApplicants": [...]
  }
}
```

#### GET /api/dashboard/admin
**Response:**
```json
{
  "success": true,
  "data": {
    "totalUsers": 12543,
    "activeJobs": 2847,
    "totalCompanies": 543,
    "totalApplications": 45231,
    "recentUsers": [...],
    "platformStats": {...}
  }
}
```

---

## 7. Settings Module

### Features
- Account settings
- Notification preferences
- Security settings
- Privacy settings

### API Endpoints

#### GET /api/settings
**Response:**
```json
{
  "success": true,
  "data": {
    "emailNotifications": true,
    "pushNotifications": false,
    "profileVisibility": true,
    "showActivityStatus": false,
    "twoFactorEnabled": false
  }
}
```

#### PUT /api/settings
**Request:**
```json
{
  "emailNotifications": true,
  "pushNotifications": false,
  "profileVisibility": true,
  "showActivityStatus": false
}
```

#### PUT /api/settings/password
**Request:**
```json
{
  "currentPassword": "string",
  "newPassword": "string"
}
```

### Database Schema

**user_settings table:**
```sql
id: UUID PRIMARY KEY
user_id: UUID FOREIGN KEY (users.id) UNIQUE
email_notifications: BOOLEAN DEFAULT true
push_notifications: BOOLEAN DEFAULT false
profile_visibility: BOOLEAN DEFAULT true
show_activity_status: BOOLEAN DEFAULT false
two_factor_enabled: BOOLEAN DEFAULT false
created_at: TIMESTAMP
updated_at: TIMESTAMP
```

---

## 8. Saved Jobs Module

### Features
- Save jobs for later
- View saved jobs
- Remove saved jobs

### API Endpoints

#### POST /api/saved-jobs
**Request:**
```json
{
  "jobId": "string"
}
```

#### GET /api/saved-jobs
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "jobId": "string",
      "jobTitle": "string",
      "company": "string",
      "location": "string",
      "savedAt": "timestamp"
    }
  ]
}
```

#### DELETE /api/saved-jobs/:jobId

### Database Schema

**saved_jobs table:**
```sql
id: UUID PRIMARY KEY
user_id: UUID FOREIGN KEY (users.id)
job_id: UUID FOREIGN KEY (jobs.id)
saved_at: TIMESTAMP
UNIQUE(user_id, job_id)
```

---

## 9. Admin Module

### Features
- User management
- Content moderation
- Platform statistics

### API Endpoints

#### GET /api/admin/users
**Query Parameters:**
- search: string
- role: string
- status: string
- page: number
- limit: number

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "role": "string",
      "status": "active | suspended",
      "joined": "timestamp"
    }
  ]
}
```

#### PUT /api/admin/users/:id/status
**Request:**
```json
{
  "status": "active | suspended"
}
```

#### GET /api/admin/statistics
**Response:**
```json
{
  "success": true,
  "data": {
    "totalUsers": 12543,
    "activeJobs": 2847,
    "totalCompanies": 543,
    "totalApplications": 45231,
    "userGrowth": "+12%",
    "jobGrowth": "+8%"
  }
}
```

---

## 10. Content Module

### Features
- Blog posts
- Testimonials
- FAQ

### API Endpoints

#### GET /api/blog
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "excerpt": "string",
      "category": "string",
      "date": "timestamp",
      "readTime": "string"
    }
  ]
}
```

#### GET /api/testimonials
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "role": "string",
      "company": "string",
      "rating": 5,
      "text": "string"
    }
  ]
}
```

#### GET /api/faq
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "category": "string",
      "questions": [
        {
          "question": "string",
          "answer": "string"
        }
      ]
    }
  ]
}
```

---

## Technical Requirements

### Authentication
- JWT-based authentication
- Token expiry: 24 hours
- Refresh token mechanism
- Password hashing: bcrypt (min 10 rounds)

### Security
- HTTPS only
- CORS configuration
- Rate limiting (100 requests/15 minutes per IP)
- Input validation and sanitization
- SQL injection prevention
- XSS protection

### File Upload
- Max file size: 5MB
- Allowed formats: PDF, DOC, DOCX
- Storage: AWS S3 or similar
- Virus scanning

### Performance
- Response time: < 200ms (average)
- Database indexing on frequently queried fields
- Caching for static content
- Pagination for large datasets

### Error Handling
Standard error response format:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```

### Status Codes
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

---

## Database Indexes

```sql
-- Users
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- Jobs
CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_jobs_type ON jobs(type);
CREATE INDEX idx_jobs_location ON jobs(location);
CREATE INDEX idx_jobs_recruiter ON jobs(recruiter_id);
CREATE INDEX idx_jobs_created ON jobs(created_at);

-- Applications
CREATE INDEX idx_applications_job ON applications(job_id);
CREATE INDEX idx_applications_student ON applications(student_id);
CREATE INDEX idx_applications_status ON applications(status);

-- Companies
CREATE INDEX idx_companies_name ON companies(name);
CREATE INDEX idx_companies_industry ON companies(industry);
```

---

## Environment Variables Required

```
DATABASE_URL=
JWT_SECRET=
JWT_EXPIRY=24h
AWS_ACCESS_KEY=
AWS_SECRET_KEY=
AWS_S3_BUCKET=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
FRONTEND_URL=
API_RATE_LIMIT=100
```

---

## Priority Implementation Order

1. **Phase 1 (Critical):**
   - Authentication APIs
   - User profile APIs
   - Job listing & details APIs

2. **Phase 2 (High):**
   - Application management APIs
   - Dashboard APIs
   - Company APIs

3. **Phase 3 (Medium):**
   - Settings APIs
   - Saved jobs APIs
   - File upload

4. **Phase 4 (Low):**
   - Admin APIs
   - Content APIs (Blog, FAQ, Testimonials)
   - Analytics

---

## Testing Requirements

- Unit tests for all endpoints
- Integration tests for critical flows
- Load testing (1000 concurrent users)
- Security testing (OWASP Top 10)
- API documentation (Swagger/OpenAPI)

---

**Document Version:** 1.0  
**Last Updated:** 2024  
**Contact:** Backend Team Lead
