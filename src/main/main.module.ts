import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FactoryController, UserController } from './main.controller';
import { FactoryService, UserService } from './main.service';
import { User, UserSchema } from './schemas/user.schema';
import { Factory, FactorySchema } from './schemas/factory.schema';

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
