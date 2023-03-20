import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { TokenPurchaseHistoryService } from 'src/token_purchase_history/token_purchase_history.service';
import { UsageHistoryService } from 'src/usage_history/usage_history.service';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { PurchaseRequestDto } from './dto/purchase-request.dto';
import { PurchaseTokenDto } from './dto/purchase-token.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly tokenPurchaseHistoryService: TokenPurchaseHistoryService,
    private readonly usageHistoryService: UsageHistoryService,
  ) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }

  @Post('purchase-tokens')
  async purhcaseToken(@Body() purchaseToken: PurchaseTokenDto) {
    try {
      const { customerId, tokensRequested } = purchaseToken;
      const tokenPurchaseHistory =
        await this.tokenPurchaseHistoryService.purchaseToken(
          customerId,
          tokensRequested,
        );

      if (tokenPurchaseHistory) {
        await this.customerService.purchaseTokens(customerId, tokensRequested);
      }

      return tokenPurchaseHistory;
    } catch (error) {
      if (error instanceof InternalServerErrorException) throw error;
      else throw new InternalServerErrorException();
    }
  }

  @Post('spends-tokens')
  async purchaseRequest(
    @Body() purchaseRequestDto: PurchaseRequestDto,
    @Res() res: Response,
  ) {
    const { customer, request } = purchaseRequestDto;
    const resultCustomer = await this.customerService.getCustomer(customer);
    const resultRequest = await this.customerService.getRequest(request);
    const { id, tokens } = resultCustomer;
    const { price_in_token } = resultRequest;
    if (tokens >= price_in_token) {
      // record transaction
      const remainingTokens = tokens - price_in_token;
      // Update token into the customer collection
      const response = await this.customerService.updateTokens(
        id,
        remainingTokens,
      );
      // Record data into the usage history
      if (response) {
        await this.usageHistoryService.createUserHistory({
          customer,
          request,
        });
      } else {
        res.status(HttpStatus.BAD_REQUEST).send({
          status: 400,
          message: 'Error while updating customer tokens',
        });
      }
      res.status(HttpStatus.CREATED).send({
        status: 201,
        message: 'Transaction has been completed successfully',
      });
    } else {
      res.status(HttpStatus.BAD_REQUEST).send({
        status: 400,
        message: 'Not Enough tokens for this request.',
      });
    }
  }
}
