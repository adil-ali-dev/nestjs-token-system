import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { config } from './ormconfig';
import { RequestModule } from './request/request.module';
import { TokenPurchaseHistoryModule } from './token_purchase_history/token_purchase_history.module';
import { UsageHistoryModule } from './usage_history/usage_history.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    CustomerModule,
    RequestModule,
    TokenPurchaseHistoryModule,
    UsageHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
