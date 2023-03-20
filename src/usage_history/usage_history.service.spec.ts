import { Test, TestingModule } from '@nestjs/testing';
import { UsageHistoryService } from './usage_history.service';

describe('UsageHistoryService', () => {
  let service: UsageHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsageHistoryService],
    }).compile();

    service = module.get<UsageHistoryService>(UsageHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
