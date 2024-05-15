import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto, RegisterDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  @UsePipes(new ValidationPipe({ transform: true }))
  async Register(@Body() registerDto: RegisterDto) {
    return this.usersService.register(registerDto);
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('/login')
  async Login(@Body() loginDto: LoginDto) {
    return this.usersService.login(loginDto);
  }
}
