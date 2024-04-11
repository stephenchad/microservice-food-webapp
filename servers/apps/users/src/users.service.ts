import { Injectable } from '@nestjs/common';
import { configService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService
    private readonly configService: ConfigService,
  ){}

  // Register user service
  async register(registerDto: RegisterDto, response:Response){
    const {name, email, password} = registerDto;
    const isEmailExist = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isEmailExist) {
      throw new BadRequestException("User already exist with this email!");
    }

    const user = await this.prisma.create({
      data: {
          name,
          email,
          password,
      },
    });
    return {user, response};
  }

  // Loginn user service 
  async Login(loginDto: loginDto){
    const { email, password } = loginDto;
    const user = {
      email,
      password,
    };
    return user;
  }

  // Get all users service 
  async getUsers() {
   return this.user.findMany({});
  }
}
