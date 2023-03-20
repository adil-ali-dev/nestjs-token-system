import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TokenPurchaseHistory } from './entities/token_purchase_history.entity';

@Injectable()
export class TokenPurchaseHistoryService {
  constructor(
    @InjectRepository(TokenPurchaseHistory)
    private tokenPurchaseHistoryRepository: Repository<TokenPurchaseHistory>,
  ) {}

  /**
   *
   * @param createTokenPurchaseHistory
   * @returns data that has been recorded into the database
   */
  create(createTokenPurchaseHistory) {
    const newTokenPurchaseHistory = this.tokenPurchaseHistoryRepository.create(
      createTokenPurchaseHistory,
    );
    return this.tokenPurchaseHistoryRepository.save(newTokenPurchaseHistory);
  }

  findAll(): Promise<TokenPurchaseHistory[]> {
    return this.tokenPurchaseHistoryRepository.find();
  }

  findMany(options): Promise<TokenPurchaseHistory[]> {
    return this.tokenPurchaseHistoryRepository.find(options);
  }

  findOne(options): Promise<TokenPurchaseHistory> {
    return this.tokenPurchaseHistoryRepository.findOne(options);
  }

  /**
   * Update the specific record into the database
   * @param options
   * @param updateCustomerData
   * @returns
   */
  update(options, updateCustomerData): Promise<any> {
    return this.tokenPurchaseHistoryRepository.update(
      options,
      updateCustomerData,
    );
  }

  /**
   * remove specific record from the history
   * @param id
   * @returns
   */
  remove(id: number) {
    try {
      return this.update({ where: { id } }, { isDeleted: true });
    } catch (error) {
      if (error instanceof InternalServerErrorException) throw error;
      else throw new InternalServerErrorException();
    }
  }

  /**
   *
   * @param customerId
   * @param tokensPurchased
   * @returns In case of success it will return the response of the token that has been recorded into the database. In case of error you can visit the console.
   */
  async purchaseToken(customerId: string, tokensPurchased: number) {
    try {
      const response = await this.create({
        customer: customerId,
        tokens_purchased: tokensPurchased,
        isDeleted: false,
      });
      return response;
    } catch (error) {
      if (error instanceof InternalServerErrorException) throw error;
      else throw new InternalServerErrorException();
    }
  }
}
