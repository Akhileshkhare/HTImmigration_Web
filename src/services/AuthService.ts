import axios from 'axios';

const API_URL = 'http://your-api-url.com/api'; // Replace with your actual API URL

export const AuthService = {
  login: async (username: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/auth/adminlogin`, {
        username,
        password,
      });
      const data = response.data as { token?: string; [key: string]: any };
      if (data.token) {
        localStorage.setItem('user', JSON.stringify(data));
      }
      return data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
  },
};