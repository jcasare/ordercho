import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // user signup

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const user = { name, email, password };
    return user;
  }

  // user login
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = { email, password };
    return user;
  }
}
