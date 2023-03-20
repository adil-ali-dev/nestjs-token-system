import { Test, TestingModule } from '@nestjs/testing';
import { UsageHistoryController } from './usage_history.controller';
import { UsageHistoryService } from './usage_history.service';

describe('UsageHistoryController', () => {
  let controller: UsageHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsageHistoryController],
      providers: [UsageHistoryService],
    }).compile();

    controller = module.get<UsageHistoryController>(UsageHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
