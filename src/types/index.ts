// This file exports TypeScript types and interfaces used throughout the application.

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
}