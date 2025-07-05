import {
    Controller,
    Post,
    Body,
    Get,
    UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';
import { JwtAuthGuard } from './jwt.guard';
import { User } from 'src/common/decorators/user.decorator';
import { JwtPayload } from 'src/common/interfaces/jwt-payload.interface';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() dto: LoginDto) {
        const user = await this.authService.validateUser(dto.email, dto.password);
        return this.authService.login(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@User() user: JwtPayload) {
        return user;
    }
}
