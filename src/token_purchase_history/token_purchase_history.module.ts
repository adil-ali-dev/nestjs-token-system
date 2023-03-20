import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenPurchaseHistoryController } from './token_purchase_history.controller';
import { TokenPurchaseHistoryService } from './token_purchase_history.service';
import { TokenPurchaseHistory } from './entities/token_purchase_history.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TokenPurchaseHistory])],
  controllers: [TokenPurchaseHistoryController],
  providers: [TokenPurchaseHistoryService],
  exports: [TokenPurchaseHistoryService],
})
export class TokenPurchaseHistoryModule {}
