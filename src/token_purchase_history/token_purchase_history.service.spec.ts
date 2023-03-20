import { Test, TestingModule } from '@nestjs/testing';
import { TokenPurchaseHistoryService } from './token_purchase_history.service';

describe('TokenPurchaseHistoryService', () => {
  let service: TokenPurchaseHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenPurchaseHistoryService],
    }).compile();

    service = module.get<TokenPurchaseHistoryService>(
      TokenPurchaseHistoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
