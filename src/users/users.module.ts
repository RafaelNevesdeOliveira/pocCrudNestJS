import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([{ name: User.nome, schema: UserSchema }]),
  ],
  providers: [UsersService],
})
export class UsersModule {}
