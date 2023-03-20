import { IsInt, IsUUID } from '@nestjs/class-validator';

export class PurchaseTokenDto {
  @IsUUID()
  customerId: string;

  @IsInt()
  tokensRequested: number;
}
