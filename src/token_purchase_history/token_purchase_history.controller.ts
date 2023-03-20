import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTokenPurchaseHistoryDto } from './dto/create-token_purchase_history.dto';
import { UpdateTokenPurchaseHistoryDto } from './dto/update-token_purchase_history.dto';
import { TokenPurchaseHistoryService } from './token_purchase_history.service';

@Controller('token-purchase-history')
export class TokenPurchaseHistoryController {
  constructor(
    private readonly tokenPurchaseHistoryService: TokenPurchaseHistoryService,
  ) {}

  @Post()
  create(@Body() createTokenPurchaseHistoryDto: CreateTokenPurchaseHistoryDto) {
    return this.tokenPurchaseHistoryService.create(
      createTokenPurchaseHistoryDto,
    );
  }

  @Get()
  findAll() {
    return this.tokenPurchaseHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tokenPurchaseHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTokenPurchaseHistoryDto: UpdateTokenPurchaseHistoryDto,
  ) {
    return this.tokenPurchaseHistoryService.update(
      +id,
      updateTokenPurchaseHistoryDto,
    );
  }
}
