interface User {
  email: string;
  name: string;
  role: 'student' | 'recruiter' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const mockUsers = {
  'student@careerquest.com': { password: 'student123', name: 'John Doe', role: 'student' as const },
  'recruiter@careerquest.com': { password: 'recruiter123', name: 'Jane Smith', role: 'recruiter' as const },
  'admin@careerquest.com': { password: 'admin123', name: 'Admin User', role: 'admin' as const },
};

const AUTH_KEY = 'careerquest_auth';

export const authStore = {
  getAuth: (): AuthState => {
    const stored = localStorage.getItem(AUTH_KEY);
    return stored ? JSON.parse(stored) : { user: null, isAuthenticated: false };
  },

  login: (email: string, password: string): boolean => {
    const mockUser = mockUsers[email as keyof typeof mockUsers];
    if (mockUser && mockUser.password === password) {
      const authState = {
        user: { email, name: mockUser.name, role: mockUser.role },
        isAuthenticated: true,
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(authState));
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
  },
};
