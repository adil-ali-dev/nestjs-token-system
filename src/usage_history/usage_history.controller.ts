import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUsageHistoryDto } from './dto/create-usage_history.dto';
import { UpdateUsageHistoryDto } from './dto/update-usage_history.dto';
import { UsageHistoryService } from './usage_history.service';

@Controller('usage-history')
export class UsageHistoryController {
  constructor(private readonly usageHistoryService: UsageHistoryService) {}

  @Post()
  create(@Body() createUsageHistoryDto: CreateUsageHistoryDto) {
    return this.usageHistoryService.create(createUsageHistoryDto);
  }

  @Get()
  findAll() {
    return this.usageHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usageHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsageHistoryDto: UpdateUsageHistoryDto,
  ) {
    return this.usageHistoryService.update(+id, updateUsageHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usageHistoryService.remove(+id);
  }
}
