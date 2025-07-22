export interface IResponse<T = undefined> {
    data: T | undefined,
    httpCode: number;
    statusCode: string;
    message: string,
    error?: string | unknown | null,
}


export interface PaginatedResponse<T> {
  data: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

