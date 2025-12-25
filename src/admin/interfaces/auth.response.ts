import type { User } from '@/interfaces/user.interface';
// Login, Register, Check Status responses
export interface AuthResponse {
  user: User;
  token: string;
}
