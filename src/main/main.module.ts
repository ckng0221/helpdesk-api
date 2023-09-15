import { Module } from '@nestjs/common';
import { FactoryService, UserService } from './main.service';
import { UserController, FactoryController } from './main.controller';

@Module({
  controllers: [UserController, FactoryController],
  providers: [UserService, FactoryService],
})
export class MainModule {}
