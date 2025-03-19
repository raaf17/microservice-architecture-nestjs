import { LoginDto, RegisterDto } from './dto/user.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    // private readonly prisma:
    private readonly configService: ConfigService,
  ) { }

  // register user
  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const user = {
      name,
      email,
      password
    }

    return user;
  }

  // login service
  async Login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = {
      email,
      password
    }

    return user;
  }

  // get all user service
  async getUsers(){
    const users = [
      {
        id: '1234',
        name: 'test',
        email: 'abc@gmail.com',
        password: '12345678'
      }
    ]
  }
}
