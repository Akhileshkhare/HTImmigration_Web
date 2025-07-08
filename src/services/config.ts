class AppConfig {
  getBaseUrl(): string {
    const baseUrl = "http://localhost:3000/api/";
    return baseUrl;
  }
}

const appConfig = new AppConfig();

export default appConfig;
