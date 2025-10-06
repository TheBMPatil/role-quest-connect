# 🚀 CareerQuest - Connect Talent with Opportunity

<div align="center">
  <img src="public/cq_logo.png" alt="CareerQuest Logo" width="200"/>
  <p><strong>A modern job platform bridging the gap between talented professionals and their dream careers</strong></p>
</div>

---

## 📖 About The Project

CareerQuest is a comprehensive job search and recruitment platform designed to revolutionize how job seekers find opportunities and how companies discover talent. Built with modern web technologies, it provides an intuitive, feature-rich experience for students, recruiters, and administrators.

### 💡 The Idea

The job search process is often fragmented and frustrating. Job seekers spend countless hours applying to positions that don't match their skills, while recruiters struggle to find qualified candidates among thousands of applications. CareerQuest aims to solve this by:

- **Smart Matching**: Connecting candidates with jobs that truly fit their skills and aspirations
- **Streamlined Process**: Simplifying applications and recruitment workflows
- **Transparency**: Providing clear communication and status tracking
- **Accessibility**: Making quality job opportunities available to everyone

### 🎯 Motivation

We believe that finding the right job shouldn't be a full-time job itself. Our motivation stems from:

- **Empowering Job Seekers**: Helping professionals take control of their career journey
- **Supporting Employers**: Enabling companies to find the perfect fit efficiently
- **Reducing Friction**: Eliminating unnecessary barriers in the hiring process
- **Building Community**: Creating a platform where talent and opportunity naturally connect

### 🌟 Vision

Our vision is to become the go-to platform where:
- Every job seeker finds meaningful work that aligns with their goals
- Every company discovers talent that drives their success
- The hiring process is transparent, efficient, and human-centered
- Career growth is accessible to all, regardless of background

---

## ✨ Key Features

### For Job Seekers (Students)
- 🔍 **Smart Job Search** - Advanced filters and search capabilities
- 📊 **Application Tracking** - Monitor all applications in one dashboard
- 💼 **Profile Management** - Showcase skills, experience, and education
- 📄 **Resume Upload** - Easy document management
- ⭐ **Job Recommendations** - AI-powered job matching
- 🔖 **Save Jobs** - Bookmark opportunities for later

### For Recruiters
- 📝 **Job Posting** - Create detailed job listings
- 👥 **Applicant Management** - Review and track candidates
- 📈 **Analytics Dashboard** - Track job performance metrics
- 🏢 **Company Profile** - Build your employer brand
- 🎯 **Smart Filtering** - Find the best candidates quickly

### For Admins
- 👨‍💼 **User Management** - Oversee platform users
- 📊 **Platform Statistics** - Monitor growth and engagement
- 🛡️ **Content Moderation** - Ensure quality and safety

### General Features
- 🌓 **Dark/Light Mode** - Comfortable viewing in any environment
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🔐 **Secure Authentication** - Role-based access control
- 🎨 **Modern UI/UX** - Clean, intuitive interface
- ⚡ **Fast Performance** - Optimized for speed

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful component library
- **React Router v6** - Client-side routing
- **React Query** - Data fetching and caching
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### State Management
- **localStorage** - Persistent authentication
- **Custom stores** - Lightweight state management

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/role-quest-connect.git
   cd role-quest-connect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🔐 Demo Credentials

Use these credentials to explore different user roles:

### Student Account
```
Email: student@careerquest.com
Password: student123
```

### Recruiter Account
```
Email: recruiter@careerquest.com
Password: recruiter123
```

### Admin Account
```
Email: admin@careerquest.com
Password: admin123
```

---

## 📂 Project Structure

```
role-quest-connect/
├── public/                 # Static assets
│   ├── cq_logo.png        # Main logo
│   └── favicon.png        # Favicon
├── src/
│   ├── components/        # React components
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   ├── ui/           # shadcn/ui components
│   │   ├── ProtectedRoute.tsx
│   │   └── ThemeProvider.tsx
│   ├── pages/            # Page components (29 pages)
│   ├── stores/           # State management
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── BACKEND_REQUIREMENTS.md  # API specifications
├── CREDENTIALS.md           # Login credentials
└── README.md               # This file
```

---

## 🎨 Features Breakdown

### Authentication & Authorization
- ✅ Role-based login (Student/Recruiter/Admin)
- ✅ Protected routes
- ✅ Persistent sessions
- ✅ Password reset flow

### Job Management
- ✅ Browse and search jobs
- ✅ Advanced filtering
- ✅ Job details with full information
- ✅ Apply to jobs (students only)
- ✅ Post and manage jobs (recruiters only)

### User Experience
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme toggle
- ✅ Toast notifications
- ✅ Loading states
- ✅ Error handling

### Dashboards
- ✅ Student dashboard with application tracking
- ✅ Recruiter dashboard with analytics
- ✅ Admin dashboard with user management

---

## 📚 Documentation

- **[Backend Requirements](BACKEND_REQUIREMENTS.md)** - Complete API specifications and database schemas
- **[Credentials](CREDENTIALS.md)** - Demo login credentials
- **[Development Plan](DEVELOPMENT_PLAN.md)** - Original development roadmap
- **[Implementation Summary](IMPLEMENTATION_SUMMARY.md)** - Feature breakdown

---

## 🔄 Development Workflow

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Code Style

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for formatting (recommended)
- **Tailwind CSS** for styling

---

## 🚧 Roadmap

### Phase 1: Backend Integration (In Progress)
- [ ] Connect to REST API
- [ ] Implement real authentication (JWT)
- [ ] Database integration
- [ ] File upload functionality

### Phase 2: Advanced Features
- [ ] Real-time notifications
- [ ] Email notifications
- [ ] Advanced search with Elasticsearch
- [ ] AI-powered job matching
- [ ] Video interview scheduling

### Phase 3: Enhancements
- [ ] Mobile app (React Native)
- [ ] Payment integration (Stripe)
- [ ] Analytics dashboard
- [ ] Messaging system
- [ ] Resume builder

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is part of a Lovable.dev project.

---

## 📧 Contact

**Project Link**: [https://github.com/yourusername/role-quest-connect](https://github.com/yourusername/role-quest-connect)

**Lovable Project**: [https://lovable.dev/projects/82104684-e9a0-443c-8ee6-e1c442189d71](https://lovable.dev/projects/82104684-e9a0-443c-8ee6-e1c442189d71)

---

## 🙏 Acknowledgments

- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  <p>Made with ❤️ by the TheBMPatil</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
