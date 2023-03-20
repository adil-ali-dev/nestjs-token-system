import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private requestRepository: Repository<Request>,
  ) {}

  create(createRequestDto: CreateRequestDto) {
    const newRequest = this.requestRepository.create(createRequestDto);
    return this.requestRepository.save(newRequest);
  }

  findAll(): Promise<Request[]> {
    return this.requestRepository.find();
  }

  findMany(options): Promise<Request[]> {
    return this.requestRepository.find(options);
  }

  findOne(options): Promise<Request> {
    return this.requestRepository.findOne(options);
  }

  update(options: any, updateRequestDto: UpdateRequestDto): Promise<any> {
    return this.requestRepository.update(options, updateRequestDto);
  }

  remove(id: number) {
    return this.update({ where: { id } }, { isDeleted: true });
  }
}
