// 核心类型定义

// 用户类型
export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
}

// 服务类型
export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  pricing: Pricing[];
  icon: string; // Lucide icon名称
  features: string[];
  apiEndpoint?: string;
}

export interface Pricing {
  tier: string;
  price: number;
  period?: 'month' | 'year' | 'project' | 'task';
  features: string[];
}

export type ServiceCategory =
  | 'trading'
  | 'analysis'
  | 'ai'
  | 'agent'
  | 'model'
  | 'consulting'
  | 'resource'
  | 'sentiment'
  | 'data';

// API相关类型
export interface ApiResponse<T = any> {
  code: number;
  message?: string;
  data: T;
}

// 联系表单类型
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}

// 能力模块类型
export interface CapabilityModule {
  id: string;
  title: string;
  icon: string;
  description: string;
  milestones: Milestone[];
  achievements: Achievement[];
}

export interface Milestone {
  period: string;
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  value: string;
  period?: string;
}

// 认证状态类型
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Dashboard统计类型
export interface DashboardStats {
  totalServices: number;
  apiCalls: number;
  apiQuota: number;
  monthlyCost: number;
  servicesActive: number;
}
