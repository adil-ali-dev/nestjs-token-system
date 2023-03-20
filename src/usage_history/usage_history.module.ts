import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsageHistory } from './entities/usage_history.entity';
import { UsageHistoryController } from './usage_history.controller';
import { UsageHistoryService } from './usage_history.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsageHistory])],
  controllers: [UsageHistoryController],
  providers: [UsageHistoryService],
  exports: [UsageHistoryService],
})
export class UsageHistoryModule {}
