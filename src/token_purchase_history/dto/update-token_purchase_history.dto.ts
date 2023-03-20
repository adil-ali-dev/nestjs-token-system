import { PartialType } from '@nestjs/mapped-types';
import { CreateTokenPurchaseHistoryDto } from './create-token_purchase_history.dto';

export class UpdateTokenPurchaseHistoryDto extends PartialType(
  CreateTokenPurchaseHistoryDto,
) {}
