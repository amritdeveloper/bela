import { ConflictException, Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Users } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}
  async register(registerDto: RegisterDto): Promise<any> {
    // Check if the user already exists
    const existingUser = await this.usersRepository.findOne({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      // If the user exists, throw an exception with a message
      throw new ConflictException('User already exists');
    }
    // Generate UUID
    const id = uuidv4();

    // Hash password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const user = await this.usersRepository.save({
      id,
      firstname: registerDto.firstname,
      lastname: registerDto.lastname,
      email: registerDto.email,
      password: hashedPassword,
    });

    // Generate JWT
    const payload = {
      id,
      firstname: registerDto.firstname,
      lastname: registerDto.lastname,
      email: registerDto.email,
    };
    const token = this.jwtService.sign(payload);

    return { user, token };
  }

  async login({ email, password }: LoginDto): Promise<any> {
    // Find the user by email
    const user = await this.usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    // Compare the provided password with the hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new Error('Invalid password');
    }

    // Generate JWT
    const payload = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };
    const token = this.jwtService.sign(payload);

    return { payload, token };
  }
}
