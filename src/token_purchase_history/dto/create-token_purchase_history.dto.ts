import { IsBoolean, IsInt, IsOptional, IsUUID } from '@nestjs/class-validator';

export class CreateTokenPurchaseHistoryDto {
  @IsUUID()
  customer: string;

  @IsInt()
  tokens_purchased: number;

  @IsBoolean()
  @IsOptional()
  isDeleted: boolean;
}
