import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [
    JwtModule.register({
      secret: 'super-secret-key', // для dev! у продакшені через .env
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
