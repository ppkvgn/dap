import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';
import { JwtPayload } from 'src/common/interfaces/jwt-payload.interface';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        token: string;
    }>;
    getProfile(user: JwtPayload): JwtPayload;
}
