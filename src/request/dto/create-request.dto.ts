import { IsOptional, IsUUID } from '@nestjs/class-validator';

export class CreateRequestDto {
  @IsUUID()
  customer: string;

  @IsUUID()
  request: string;

  @IsOptional()
  isDeleted: boolean;
}
