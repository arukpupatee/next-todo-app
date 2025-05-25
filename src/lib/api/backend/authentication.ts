import { AxiosInstance } from 'axios';
import { ApiResponse, User } from '.';

export type RegisterPayload = {
  username: string;
  password: string;
};

export class AuthenticationApi {
  constructor(private readonly apiClient: AxiosInstance) {}

  async register(payload: RegisterPayload) {
    const response = await this.apiClient.post<ApiResponse<User>>('/users', payload);

    return response.data;
  }
}
