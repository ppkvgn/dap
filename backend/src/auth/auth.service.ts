import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    private prisma = new PrismaClient();

    constructor(private jwtService: JwtService) {}

    async validateUser(email: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { email } });

        if (!user) {
            throw new UnauthorizedException('Користувача не знайдено');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Невірний пароль');
        }

        const { password: _, ...result } = user;
        return result;
    }

    async login(user: any) {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
        };

        return {
            token: this.jwtService.sign(payload),
        };
    }
}
