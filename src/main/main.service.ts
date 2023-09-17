import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { getNonNullObject } from '../utils/common';
import { CreateFactoryDto, UpdateFactoryDto } from './dto/factory.dto';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { Factory } from './schemas/factory.schema';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async findAll(queryParams: object): Promise<User[]> {
    const filterOptions = getNonNullObject(queryParams);

    return await this.userModel.find(filterOptions).exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (user) return user;
    console.log(user);

    return user;

    // throw new NotFoundException('User not found');
  }

  async findByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ erp_name: username }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findById(id).exec();
    if (user) return await user.updateOne(updateUserDto).exec();

    throw new NotFoundException('User not found');
  }

  async remove(id: string) {
    await this.userModel.findByIdAndUpdate(id, { deletion_flag: true }).exec();
    return `Deleted user id: ${id}`;
  }
}

@Injectable()
export class FactoryService {
  constructor(
    @InjectModel(Factory.name) private factoryModel: Model<Factory>,
  ) {}

  async create(createFactoryDto: CreateFactoryDto): Promise<Factory> {
    const factory = new this.factoryModel(createFactoryDto);
    return factory.save();
  }

  async findAll(queryParams: object): Promise<Factory[]> {
    const filterOptions = getNonNullObject(queryParams);

    return this.factoryModel.find(filterOptions).exec();
  }

  async findOne(id: string): Promise<Factory> {
    return this.factoryModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateFactoryDto) {
    const factory = await this.factoryModel.findById(id).exec();
    return await factory.updateOne(updateUserDto);
  }

  async remove(id: string) {
    return await this.factoryModel.deleteOne({ _id: id });
  }
}
