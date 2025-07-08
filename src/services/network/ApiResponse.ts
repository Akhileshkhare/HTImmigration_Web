export type ApiResponse<T> = { success: true; value: T } | { success: false; error: ApiError };

export interface ApiError {
  code: number;
  message: string;
}
