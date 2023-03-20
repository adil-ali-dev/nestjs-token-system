import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestModule } from 'src/request/request.module';
import { TokenPurchaseHistoryModule } from 'src/token_purchase_history/token_purchase_history.module';
import { UsageHistoryModule } from 'src/usage_history/usage_history.module';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
    TokenPurchaseHistoryModule,
    RequestModule,
    UsageHistoryModule,
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
