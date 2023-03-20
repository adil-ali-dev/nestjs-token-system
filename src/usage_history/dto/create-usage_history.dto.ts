import { IsBoolean, IsUUID } from '@nestjs/class-validator';
export class CreateUsageHistoryDto {
  @IsUUID()
  customer: string;

  @IsUUID()
  request: string;

  @IsBoolean()
  isDeleted: boolean;
}
