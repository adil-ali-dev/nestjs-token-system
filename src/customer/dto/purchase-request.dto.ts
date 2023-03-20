import { IsUUID } from '@nestjs/class-validator';

export class PurchaseRequestDto {
  @IsUUID()
  customer: string;

  @IsUUID()
  request: string;
}
