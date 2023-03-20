import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestService } from 'src/request/request.service';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    private requestService: RequestService,
  ) {}

  create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const newCustomer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(newCustomer);
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findMany(options: any): Promise<Customer[]> {
    return this.customerRepository.find(options);
  }

  findOne(options: any): Promise<Customer> {
    return this.customerRepository.findOne(options);
  }

  findRequest(options: any): Promise<any> {
    return this.requestService.findOne(options);
  }

  /**
   * This function is used to update the attributes of the customer.
   * This function is mostly used incase of purchasing the tokens
   * @param options
   * @param updateCustomerData
   * @returns Promise of the response (rejected or resolved)
   */
  async update(options, updateCustomerData: UpdateCustomerDto): Promise<any> {
    try {
      return this.customerRepository.update(options, updateCustomerData);
    } catch (error) {
      if (error instanceof InternalServerErrorException) throw error;
      else throw new InternalServerErrorException();
    }
  }

  /**
   * Remove the specific customer
   * @param id
   * @returns
   */
  remove(id: number) {
    try {
      return this.update({ id }, { isDeleted: true });
    } catch (error) {
      if (error instanceof InternalServerErrorException) throw error;
      else throw new InternalServerErrorException();
    }
  }

  /**
   *
   * @param customerId
   * @param tokensRequested
   * @returns the updated record into the database.
   */
  async purchaseTokens(customerId: string, tokensRequested: number) {
    try {
      // Fetch the existing tokens.
      const customer = await this.findOne({ where: { id: customerId } });
      // Add the requested tokens.
      customer.tokens = customer.tokens + tokensRequested;
      // Update the customer tokens.
      return await this.update(
        { id: customerId },
        {
          tokens: customer.tokens,
        },
      );
    } catch (error) {
      if (error instanceof InternalServerErrorException) throw error;
      else throw new InternalServerErrorException();
    }
  }

  /**
   * To get the specific customer from the database.
   * @param customer
   * @returns specific customer
   */
  async getCustomer(customer: string) {
    try {
      return await this.findOne({ where: { id: customer } });
    } catch (error) {
      if (error instanceof InternalServerErrorException) throw error;
      else throw new InternalServerErrorException();
    }
  }

  /**
   * get specific request form the database
   * @param request
   * @returns specific request
   */
  async getRequest(request: any) {
    try {
      return await this.findRequest({ where: { id: request } });
    } catch (error) {
      if (error instanceof InternalServerErrorException) throw error;
      else throw new InternalServerErrorException();
    }
  }

  /**
   * Update the specific customer tokens into the customer table
   * @param customerId
   * @param tokens
   * @returns updated record of the customer
   */
  async updateTokens(customerId: string, tokens: number) {
    try {
      return await this.update(
        { id: customerId },
        {
          tokens: tokens,
        },
      );
    } catch (error) {
      if (error instanceof InternalServerErrorException) throw error;
      else throw new InternalServerErrorException();
    }
  }
}
