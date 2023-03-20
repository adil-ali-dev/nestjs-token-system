import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsageHistory } from './entities/usage_history.entity';
@Injectable()
export class UsageHistoryService {
  constructor(
    @InjectRepository(UsageHistory)
    private usageHistoryRepository: Repository<UsageHistory>,
  ) {}

  /**
   * Create new record into the database
   * @param createUsageHistoryDto
   * @returns the newly create record
   */
  create(createUsageHistoryDto) {
    const newUsageHistory = this.usageHistoryRepository.create(
      createUsageHistoryDto,
    );
    return this.usageHistoryRepository.save(newUsageHistory);
  }

  findAll(): Promise<UsageHistory[]> {
    return this.usageHistoryRepository.find();
  }

  findMany(options: any): Promise<UsageHistory[]> {
    return this.usageHistoryRepository.find(options);
  }

  findOne(options: any): Promise<UsageHistory> {
    return this.usageHistoryRepository.findOne(options);
  }

  update(options: any, updateUsageHistoryData): Promise<any> {
    return this.usageHistoryRepository.update(options, updateUsageHistoryData);
  }

  remove(id: number) {
    return this.update({ where: { id } }, { isDeleted: true });
  }

  /**
   * Create a new record into the into the Usage history
   * @param options
   * @returns
   */
  async createUserHistory(options: any) {
    try {
      return this.create(options);
    } catch (error) {
      if (error instanceof InternalServerErrorException) throw error;
      else throw new InternalServerErrorException();
    }
  }
}
