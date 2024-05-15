import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { Users } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '24h' },
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
