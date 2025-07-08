import { ApiResponse } from "../network/ApiResponse";
import httpClient from "../network/httpClient";
import { AuthResponse } from "./AuthResponse";

const REGISTER = "users/register";
const LOGIN = "/admin/login";
const LOGOUT = "/admin/logout"; 

class AuthApi {
  public async register(data: any): Promise<ApiResponse<AuthResponse>> {
    const response = await httpClient.post<AuthResponse>(REGISTER, data);
    console.log("response = ", response);
    return response;
  }

  public async login(data: any): Promise<ApiResponse<AuthResponse>> {
    const response = await httpClient.post<AuthResponse>(LOGIN, data);
    console.log("response = ", response);
    return response;
  }

  public async logout(data: { deviceId: string }): Promise<ApiResponse<any>> {
    const response = await httpClient.post<any>(LOGOUT, data);
    console.log("logout response = ", response);
    return response;
  }
}

const authApi = new AuthApi();
export default authApi;
