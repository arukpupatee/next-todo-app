export type ApiResponse<T> = {
  isSuccess: boolean;
  data: T;
};

export type BaseEntity = {
  id: string;
  created_at: string; // TODO: Change to Date
  updated_at: string; // TODO: Change to Date
};
