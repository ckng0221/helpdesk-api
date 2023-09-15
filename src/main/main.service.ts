import { Injectable } from '@nestjs/common';
import { CreateFactoryDto, CreateUserDto } from './dto/create-main.dto';
import { UpdateFactoryDto, UpdateUserDto } from './dto/update-main.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  findAll() {
    return `This action returns all main`;
  }

  findOne(id: number) {
    return `This action returns a #${id} main`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} main`;
  }

  remove(id: number) {
    return `This action removes a #${id} main`;
  }
}

@Injectable()
export class FactoryService {
  create(createFactory: CreateFactoryDto) {
    return 'This action adds a new main';
  }

  findAll() {
    return `This action returns all main`;
  }

  findOne(id: number) {
    return `This action returns a #${id} main`;
  }

  update(id: number, updateFactory: UpdateFactoryDto) {
    return `This action updates a #${id} main`;
  }

  remove(id: number) {
    return `This action removes a #${id} main`;
  }
}
