import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    login(user: any): Promise<{
        token: string;
    }>;
}
