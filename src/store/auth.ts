import { create } from 'zustand';
import type { User, AuthState } from '../types';

interface AuthStore extends AuthState {
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name?: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  setLoading: (isLoading) => set({ isLoading }),

  signIn: async (email, password) => {
    set({ isLoading: true });
    try {
      // TODO: 集成Firebase Auth或Supabase
      // 目前使用模拟数据
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockUser: User = {
        id: 'mock-user-id',
        email,
        name: email.split('@')[0],
        createdAt: new Date(),
      };

      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  signUp: async (email, password, name) => {
    set({ isLoading: true });
    try {
      // TODO: 集成Firebase Auth或Supabase
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockUser: User = {
        id: 'mock-user-id',
        email,
        name: name || email.split('@')[0],
        createdAt: new Date(),
      };

      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  signOut: async () => {
    set({ isLoading: true });
    try {
      // TODO: 集成Firebase Auth或Supabase
      await new Promise(resolve => setTimeout(resolve, 500));
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));
