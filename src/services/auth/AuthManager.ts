import authApi from "./authApi";
export class AuthResult {
  success: boolean;
  message: string;

  constructor(success: boolean, message: string) {
    this.success = success;
    this.message = message;
  }
}

class AuthManager {
  public async login(
    userName: string,
    password: string,
    remember: boolean
  ): Promise<AuthResult> {
    try {
      const authResponse = await authApi.login({
        username: userName,
        password,
      });
      if (authResponse.success) {
        const tokenStorage = remember ? localStorage : sessionStorage;
        // get the role here
        tokenStorage.setItem("accessToken", authResponse.value.token);
        const userProfile = authResponse.value.profile;
        tokenStorage.setItem("userName", `${userProfile.firstName} ${userProfile.lastName}`);

        return new AuthResult(true, "Login success");
      } else {
        console.log("errroer");
        return { success: false, message: "error" };
      }
    } catch (error) {
      console.error("Login failed:", error);
      return new AuthResult(false, "Login failed");
    }
  }

  public isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }
  public isAdminLoggedIn(): boolean {
    return true;
  }

public async logout(deviceId: string = ""): Promise<void> {
  const payload = { deviceId };

  try {
    const response:any = await authApi.logout(payload);
    if (response.data.success) {
      console.log("Logout successful on server.");
    } else {
      console.warn("Server logout failed:", response.data.message);
    }
  } catch (error) {
    console.error("Logout API error:", error);
  } finally {
    this.clearAuthData();
    window.location.assign("/adminlogin");
    
  }
}

private clearAuthData(): void {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userEmail");

  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
  sessionStorage.removeItem("userAuthRole");
  sessionStorage.removeItem("userEmail");
  localStorage.clear();
}


  public getAccessToken(): string | null {
    return (
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken")
    );
  }


  public getUserEmail(): string | null {
    return (
      localStorage.getItem("userEmail") || sessionStorage.getItem("userEmail")
    );
  }

}

const authManager = new AuthManager();
export default authManager;
