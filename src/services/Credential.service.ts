import bcrypt from "bcryptjs";
export class CredentialService {
    async hashPassword(password:string,salt:number) {
        return await bcrypt.hash(password, salt);
    };

  async comparePassword(password: string, hasedPassword: string) {
    return await bcrypt.compare(password, hasedPassword);
    };
}