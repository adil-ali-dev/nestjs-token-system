import { Test, TestingModule } from '@nestjs/testing';
import { TokenPurchaseHistoryController } from './token_purchase_history.controller';
import { TokenPurchaseHistoryService } from './token_purchase_history.service';

describe('TokenPurchaseHistoryController', () => {
  let controller: TokenPurchaseHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenPurchaseHistoryController],
      providers: [TokenPurchaseHistoryService],
    }).compile();

    controller = module.get<TokenPurchaseHistoryController>(
      TokenPurchaseHistoryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
