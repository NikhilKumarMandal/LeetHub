type Role = "USER" | "ADMIN";

export interface UserData{
    name: string;
    email: string;
    avatar?: string;
    password: string;
    role?:Role
}