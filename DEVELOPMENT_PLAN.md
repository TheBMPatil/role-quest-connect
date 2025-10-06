# CareerQuest Vite React Development Plan

## Theme Configuration

### Color Palette (Updated from Portfolio Theme)
```css
:root {
  /* Primary Colors */
  --primary: #e9552e;        /* Orange-Red (CTA buttons, links) */
  --primary-hover: #d34721;  /* Darker orange for hover */
  --secondary: #1b1b1b;      /* Dark text */
  --background: #f5e6d3;     /* Main background (beige) */
  --contrast: #faf8f5;       /* Card backgrounds */
  --section-bg: #d3d3d3;     /* Section backgrounds */
  --text: #1b1b1b;           /* Primary text */
  --muted: #3a3a3a;          /* Secondary text */
  
  /* Opacity Variations */
  --primary-10: rgba(233, 85, 46, 0.1);
  --primary-20: rgba(233, 85, 46, 0.2);
  --primary-30: rgba(233, 85, 46, 0.3);
}
```

## Phase 1: Project Setup (Week 1)

### 1.1 Initialize Vite Project
```bash
npm create vite@latest careerquest-app -- --template react-ts
cd careerquest-app
npm install
```

### 1.2 Install Dependencies
```bash
# Core Dependencies
npm install react-router-dom @tanstack/react-query zustand
npm install react-hook-form @hookform/resolvers zod
npm install axios date-fns

# UI & Styling
npm install tailwindcss @tailwindcss/forms @tailwindcss/container-queries
npm install phosphor-react lucide-react
npm install framer-motion

# Development
npm install -D @types/node eslint-plugin-react-hooks
```

### 1.3 Configure Tailwind (tailwind.config.js)
```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e9552e',
        'primary-hover': '#d34721',
        secondary: '#1b1b1b',
        background: '#f5e6d3',
        contrast: '#faf8f5',
        'section-bg': '#d3d3d3',
        text: '#1b1b1b',
        muted: '#3a3a3a',
      },
      fontFamily: {
        sans: ['Work Sans', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
```

### 1.4 Project Structure
```
src/
├── components/
│   ├── ui/              # Reusable components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   └── Table.tsx
│   ├── layout/          # Layout components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── features/        # Feature components
├── pages/               # Page components
├── hooks/               # Custom hooks
├── services/            # API services
├── stores/              # Zustand stores
├── types/               # TypeScript types
├── utils/               # Utilities
└── assets/              # Static assets
```

## Phase 2: Core UI Components (Week 2)

### 2.1 Design System Components
- **Button**: Primary (orange), Secondary (gray), Ghost variants
- **Input**: Text, Email, Password, Search with validation states
- **Card**: Various layouts matching designs
- **Table**: Responsive with container queries
- **Modal/Dialog**: For forms and confirmations
- **Sidebar**: Navigation with icons (Phosphor icons)

### 2.2 Layout Components
- **Header**: Logo, navigation, search, user menu
- **Sidebar**: Role-based navigation (Student/Recruiter/Admin)
- **Footer**: Links, social icons, copyright

## Phase 3: Authentication System (Week 3)

### 3.1 Pages to Implement
- **Landing Page** (`/`) - Hero section with role selection
- **Login Page** (`/login`) - Email/password form
- **Student Registration** (`/register/student`) - Multi-step form
- **Recruiter Registration** (`/register/recruiter`) - Company details
- **Forgot Password** (`/forgot-password`) - Email input
- **Reset Password** (`/reset-password`) - New password form

### 3.2 Authentication Store (Zustand)
```typescript
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  userRole: 'student' | 'recruiter' | 'admin' | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
}
```

## Phase 4: Onboarding Flow (Week 4)

### 4.1 Onboarding Pages
- **Role Selection** (`/onboarding/role`) - Student vs Recruiter choice
- **Benefits Overview** (`/onboarding/benefits`) - Platform features
- **Profile Setup** (`/onboarding/profile`) - Initial profile creation

### 4.2 Splash Screen
- **Splash Screen** (`/splash`) - App introduction with branding

## Phase 5: Dashboard Implementation (Week 5-6)

### 5.1 Student Dashboard (`/dashboard/student`)
- Applied jobs table with status tracking
- Job recommendations cards
- Profile completion progress bar
- Quick actions (search jobs, update profile)

### 5.2 Recruiter Dashboard (`/dashboard/recruiter`)
- Active job postings table
- Recent applications overview
- Analytics cards (views, applications)
- Quick actions (post job, review applications)

### 5.3 Admin Dashboard (`/dashboard/admin`)
- User management table with search
- Platform statistics cards
- Content moderation tabs
- System health indicators

## Phase 6: Job Management System (Week 7-8)

### 6.1 Job-Related Pages
- **Job Listings** (`/jobs`) - Search, filters, pagination
- **Job Details** (`/jobs/:id`) - Full job description, apply button
- **Job Creation** (`/jobs/create`) - Multi-section form for recruiters
- **Job Editing** (`/jobs/:id/edit`) - Edit existing job posts
- **Application Management** (`/applications`) - For recruiters

### 6.2 Application System
- **Application Tracker** (`/applications/student`) - Student's applications
- **Application Details** - Status updates, communication

## Phase 7: Profile Management (Week 9)

### 7.1 Profile Pages
- **Student Profile View** (`/profile/student/:id`) - Public profile
- **Student Profile Edit** (`/profile/student/edit`) - Edit form
- **Company Profile View** (`/profile/company/:id`) - Company page
- **Company Profile Edit** (`/profile/company/edit`) - Company details

### 7.2 Resume Features
- **Resume Evaluation** (`/resume/evaluate`) - AI-powered analysis
- Resume upload and management

## Phase 8: Settings & Support (Week 10)

### 8.1 Settings Pages
- **User Settings** (`/settings`) - Account, notifications, privacy
- **Account Security** (`/settings/security`) - Password, 2FA
- **Notification Preferences** (`/settings/notifications`) - Email/push settings

### 8.2 Support Pages
- **FAQ Page** (`/faq`) - Searchable accordion interface
- **Contact/About** (`/about`, `/contact`) - Company information
- **Legal Information** (`/legal`) - Terms, privacy policy
- **Bug Report** (`/support/bug-report`) - Feedback form

## Phase 9: Additional Features (Week 11-12)

### 9.1 Content Pages
- **Testimonials** (`/testimonials`) - Success stories
- **Career Blog** (`/blog`) - News and articles
- **Company Directory** (`/companies`) - Browse companies

### 9.2 Advanced Features
- Real-time notifications
- Advanced search with filters
- Analytics dashboards
- Email templates
- Mobile responsiveness optimization

## Implementation Guidelines

### Component Naming Convention
```typescript
// Use PascalCase for components
export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-contrast rounded-lg border border-primary/20 p-6">
      {/* Component content */}
    </div>
  );
};
```

### Styling Guidelines
```css
/* Use theme colors consistently */
.btn-primary {
  @apply bg-primary hover:bg-primary-hover text-white;
}

.card {
  @apply bg-contrast border border-primary/20 rounded-lg;
}

.text-primary {
  @apply text-text;
}

.text-secondary {
  @apply text-muted;
}
```

### State Management Pattern
```typescript
// Global state for authentication
const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials) => {
    // Implementation
  },
}));

// Local state for forms
const useJobForm = () => {
  const { register, handleSubmit, formState } = useForm<JobFormData>();
  // Form logic
};
```

### API Integration
```typescript
// Service layer for API calls
export const jobService = {
  getJobs: (params: JobSearchParams) => api.get('/jobs', { params }),
  getJob: (id: string) => api.get(`/jobs/${id}`),
  createJob: (data: CreateJobData) => api.post('/jobs', data),
  updateJob: (id: string, data: UpdateJobData) => api.put(`/jobs/${id}`, data),
};
```

## Testing Strategy
- Unit tests for utilities and hooks
- Component tests for UI components
- Integration tests for user flows
- E2E tests for critical paths

## Performance Optimization
- Code splitting by routes
- Lazy loading for heavy components
- Image optimization
- Bundle analysis and optimization
- Caching strategies with React Query

## Deployment Checklist
- Environment configuration
- Build optimization
- SEO meta tags
- Error boundary implementation
- Analytics integration
- Performance monitoring

## Success Metrics
- Page load times < 3s
- Mobile responsiveness score > 95
- Accessibility compliance (WCAG 2.1)
- User engagement metrics
- Conversion rates for job applications

---

**Next Steps:**
1. Set up development environment
2. Create design system components
3. Implement authentication flow
4. Build core dashboards
5. Add job management features
6. Polish and optimize

**Estimated Timeline:** 12 weeks for MVP
**Team Size:** 2-3 developers recommended