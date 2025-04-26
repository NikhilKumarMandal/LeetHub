type Role = "USER" | "ADMIN";

interface IUSER{
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: Role;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}