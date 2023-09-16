import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFactoryDto, UpdateFactoryDto } from './dto/factory.dto';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { Factory, User } from './schemas/main.schema';

// Use `map` to get a new array with new objects
function getNonNullObject(obj: object) {
  return Object.keys(obj).reduce((newObj, key) => {
    const value = obj[key];
    if (value !== null && value !== undefined) {
      newObj[key] = value;
    }
    return newObj;
  }, {});
}

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(queryParams: object): Promise<User[]> {
    const filterOptions = getNonNullObject(queryParams);

    return this.userModel.find(filterOptions).exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findById(id).exec();
    return await user.updateOne(updateUserDto);
  }

  async remove(id: string) {
    await this.userModel.findByIdAndUpdate(id, { delete_flag: true }).exec();
    return `Deleted user id: ${id}`;
  }
}

@Injectable()
export class FactoryService {
  constructor(
    @InjectModel(Factory.name) private factoryModel: Model<Factory>,
  ) {}

  async create(createFactoryDto: CreateFactoryDto): Promise<Factory> {
    const createdFactory = new this.factoryModel(createFactoryDto);
    return createdFactory.save();
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
