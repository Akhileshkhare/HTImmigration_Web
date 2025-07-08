import authManager from "../auth/AuthManager";

export const AccessTokenInterceptor = (
  config: any
) => {
  const token = authManager.getAccessToken();
  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const AuthInterceptor = (error: any) => {
  const status = error.response?.status || 500;
  const originalRequest = window.location.pathname;

  const loginUrls = ["/adminlogin", "/register"];
  if (status === 401) {
    const isAuthUrl = loginUrls.some((url) => originalRequest?.includes(url));
    if (!isAuthUrl) {
      console.error("Redirecting due to 401 Unauthorized");
      localStorage.clear();
      window.location.href = "/adminlogin";
    }
  }

  return Promise.reject(error);
};

export default AuthInterceptor;
