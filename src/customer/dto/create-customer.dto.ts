import { IsBoolean, IsNumber, IsString } from '@nestjs/class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsBoolean()
  isDeleted?: boolean;

  @IsNumber()
  tokens: number;
}
