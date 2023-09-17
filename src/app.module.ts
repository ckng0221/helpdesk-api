import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainModule } from './main/main.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModule } from './ticket/ticket.module';
import { AuthModule } from './auth/auth.module';

const mongoConnection =
  process.env.NODE_ENV == 'test'
    ? process.env.MONGODB_CONNECTION_TEST ||
      'mongodb://127.0.0.1:27017/helpdesk-test'
    : process.env.MONGODB_CONNECTION || 'mongodb://127.0.0.1:27017/helpdesk';

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
