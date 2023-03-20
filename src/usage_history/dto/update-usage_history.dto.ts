import { PartialType } from '@nestjs/mapped-types';
import { CreateUsageHistoryDto } from './create-usage_history.dto';

export class UpdateUsageHistoryDto extends PartialType(CreateUsageHistoryDto) {}
