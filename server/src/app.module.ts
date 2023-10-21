import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { PaymentsModule } from './payments/payments.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "db",
      port: 5432,
      username: "sparely",
      password: "sparely",
      database: "sparely",
      autoLoadEntities: true,
      synchronize: true,
    }),
      PaymentsModule, CampaignsModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
