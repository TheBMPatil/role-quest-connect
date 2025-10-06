# Role Quest Connect - Project Overview

## 🎯 Project Description

Role Quest Connect (CareerQuest) is a modern job platform that connects talented individuals with their dream careers. The platform provides a seamless experience for both job seekers and recruiters, featuring personalized job recommendations, streamlined application processes, and powerful hiring management tools.

## 🚀 Features

### For Job Seekers (Students)
- **Browse Jobs**: Search and filter through available job listings
- **Job Details**: View comprehensive job information including requirements, benefits, and company details
- **Student Dashboard**: Track applications, view recommended jobs, and manage saved positions
- **Profile Management**: Create and maintain a professional profile with education, skills, and resume
- **Application Tracking**: Monitor the status of all job applications in one place

### For Recruiters
- **Post Jobs**: Create detailed job listings with requirements and benefits
- **Recruiter Dashboard**: Manage all job postings and view applicant statistics
- **Applicant Management**: Review and track candidates for each position
- **Analytics**: View job posting performance metrics (views, applicants, etc.)

### General Features
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Authentication**: Login and registration with role-based access (Student/Recruiter)
- **About Page**: Learn about the platform's mission and values
- **Contact Page**: Get in touch with the team
- **Pricing Page**: View subscription plans for recruiters

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navigation bar with responsive menu
│   │   └── Footer.tsx       # Footer with links and contact info
│   └── ui/                  # shadcn/ui components
├── pages/
│   ├── Index.tsx            # Landing page with hero section and featured jobs
│   ├── Login.tsx            # User login page
│   ├── Register.tsx         # User registration with role selection
│   ├── Jobs.tsx             # Job listings with search and filters
│   ├── JobDetails.tsx       # Detailed job information page
│   ├── StudentDashboard.tsx # Student dashboard with applications
│   ├── RecruiterDashboard.tsx # Recruiter dashboard with job postings
│   ├── Profile.tsx          # User profile management
│   ├── PostJob.tsx          # Job posting form for recruiters
│   ├── About.tsx            # About the platform
│   ├── Contact.tsx          # Contact form and information
│   ├── Pricing.tsx          # Pricing plans for recruiters
│   └── NotFound.tsx         # 404 error page
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── App.tsx                  # Main app component with routing
└── main.tsx                 # Application entry point
```

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form (via shadcn/ui)
- **Notifications**: Sonner (toast notifications)
- **Icons**: Lucide React

## 🎨 Design System

The application uses a consistent design system with:
- **Color Scheme**: Primary color with muted backgrounds
- **Typography**: Clear hierarchy with responsive font sizes
- **Components**: Reusable UI components from shadcn/ui
- **Spacing**: Consistent padding and margins
- **Borders**: Subtle borders with primary color accents

## 📱 Pages Overview

### Public Pages
1. **Home (/)** - Landing page with featured jobs and call-to-action
2. **Jobs (/jobs)** - Browse all available job listings
3. **Job Details (/jobs/:id)** - View detailed information about a specific job
4. **About (/about)** - Learn about the platform
5. **Contact (/contact)** - Contact form and business information
6. **Pricing (/pricing)** - Subscription plans for recruiters
7. **Login (/login)** - User authentication
8. **Register (/register)** - New user registration

### Protected Pages (Require Authentication)
1. **Student Dashboard (/student-dashboard)** - Job seeker's control panel
2. **Recruiter Dashboard (/recruiter-dashboard)** - Employer's control panel
3. **Profile (/profile)** - User profile management
4. **Post Job (/post-job)** - Create new job listings (recruiters only)

### Error Pages
1. **404 Not Found (*)** - Handles invalid routes

## 🔄 User Flows

### Job Seeker Flow
1. Register as a Student → Student Dashboard
2. Browse Jobs → View Job Details → Apply
3. Track Applications in Dashboard
4. Manage Profile and Resume

### Recruiter Flow
1. Register as a Recruiter → Recruiter Dashboard
2. Post New Job → View Job Performance
3. Review Applicants → Contact Candidates
4. Manage Multiple Job Postings

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔐 Authentication Flow

Currently, the application uses mock authentication:
- Login redirects to Student Dashboard by default
- Registration redirects based on selected role (Student/Recruiter)
- In production, this should be replaced with a proper authentication system

## 📊 Mock Data

The application currently uses mock data for:
- Job listings
- Applications
- User profiles
- Company information

In production, these should be replaced with API calls to a backend service.

## 🎯 Future Enhancements

1. **Backend Integration**: Connect to a real API for data persistence
2. **Real Authentication**: Implement JWT-based authentication
3. **File Upload**: Allow resume and document uploads
4. **Real-time Notifications**: WebSocket-based notifications
5. **Advanced Search**: Elasticsearch integration for better job search
6. **Messaging System**: In-app messaging between recruiters and candidates
7. **Video Interviews**: Integrated video interview scheduling
8. **Analytics Dashboard**: Advanced analytics for recruiters
9. **Payment Integration**: Stripe/PayPal for subscription payments
10. **Email Notifications**: Automated email updates for applications

## 🐛 Known Issues

- No actual data persistence (mock data only)
- No real authentication system
- No file upload functionality
- No email notifications
- No payment processing

## 📝 Notes

- All pages are fully responsive
- The design follows modern UI/UX best practices
- Components are reusable and maintainable
- Code is well-structured and documented
- TypeScript ensures type safety throughout the application

## 🤝 Contributing

This is a demo project. For production use, implement:
1. Backend API integration
2. Real authentication and authorization
3. Database integration
4. File storage system
5. Email service
6. Payment gateway
7. Security measures (CSRF, XSS protection, etc.)

## 📄 License

This project is part of a Lovable.dev project and follows their licensing terms.
