import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FactoryController, UserController } from './main.controller';
import { FactoryService, UserService } from './main.service';
import {
  Factory,
  FactorySchema,
  User,
  UserSchema,
} from './schemas/main.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Factory.name, schema: FactorySchema },
    ]),
  ],
  controllers: [UserController, FactoryController],
  providers: [UserService, FactoryService],
})
export class MainModule {}
