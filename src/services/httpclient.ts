import axios, { InternalAxiosRequestConfig } from "axios";
import type { AxiosResponse } from "axios";
import appConfig from "./config";
import AuthInterceptor, {
  AccessTokenInterceptor,
} from "./network/AuthInterceptor";

/**
 * Depricated
 */
class HttpClient {
  private axiosClient: any;
  private fetchInterval: number | null = null;
  constructor() {
    this.axiosClient = axios.create({
      baseURL: appConfig.getBaseUrl(),
      timeout: 600000,
    });
    this.axiosClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
      return AccessTokenInterceptor(config);
      },
      (error: any): Promise<any> => {
      return Promise.reject(error);
      }
    );

    this.axiosClient.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => {
      return response;
      },
      (error: any): Promise<any> => {
      // Anything except 2XX goes to here
      return AuthInterceptor(error);
      }
    );
  }

  public async getV2<T>(url: string): Promise<T> {
    console.log("url :>> ", url);
    const axiosClient = axios.create();
    axiosClient.interceptors.request.use(
      (config) => {
        return AccessTokenInterceptor(config);
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axiosClient.interceptors.response.use(
      (response) => {
        console.log(" response Interceptor response = ", response);
        return response;
      },
      (error) => {
        // Anything except 2XX goes to here
        return AuthInterceptor(error);
      }
    );
    const response = await axiosClient.get(url);
    return response?.data;
  }

  public async get<T>(url: string): Promise<T> {
    const response = await this.axiosClient.get(url);
    return response?.data;
  }

  public async post<T>(url: string, requestData: any): Promise<T> {
    const response = await this.axiosClient.post(url, requestData);
    return response?.data;
  }

  public async put<T>(url: string, requestData?: any): Promise<T> {
    const response = await this.axiosClient.put(url, requestData);
    return response?.data;
  }

  public async patch<T>(url: string, data: any): Promise<T> {
    const response = await this.axiosClient.patch(url, data);
    return response.data;
  }

  public async delete<T>(url: string, requestData?: any): Promise<T> {
    const response = await this.axiosClient.delete(url, requestData);
    return response?.data;
  }
  public startPeriodicCalls(url: string, interval: number): void {
    this.fetchInterval = window.setInterval(async () => {
      try {
        await this.fetchData(url);
      } catch (error) {
        console.log(" Error fetching data from time interval => error", error);
      }
    }, interval);
  }

  public stopPeriodicCalls(): void {
    if (this.fetchInterval !== null) {
      window.clearInterval(this.fetchInterval);
      this.fetchInterval = null;
    }
  }

  public async fetchData(url: string): Promise<void> {
    try {
      const response = await this.get(url);
      console.log(`Data from ${url}:`, response);
    } catch (error) {
      console.error(
        ` Error fetching data from time interval from ${url}:`,
        error
      );
    }
  }

  async downloadFile(url: string): Promise<any> {
    const response = await axios.get(url, {
      responseType: "blob", // This tells axios to expect a blob response
    });
    return response;
  }
}

const httpClient = new HttpClient();
export default httpClient;
