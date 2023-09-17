import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainModule } from './main/main.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModule } from './ticket/ticket.module';
import { AuthModule } from './auth/auth.module';

const mongoConnection = 'mongodb://localhost:27017/helpdesk';

@Module({
  imports: [
    MainModule,
    MongooseModule.forRoot(mongoConnection),
    TicketModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
