import { Request } from "express";


type Role = "USER" | "ADMIN";

export interface UserData {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  role?: Role;
}


export type AuthCookie = {
  accessToken: string;
  refreshToken: string;
};


export interface AuthRequest extends Request {
  auth: {
    sub: string;
    role: string;
    id?: string;
    name: string
    email: string
  };
}
