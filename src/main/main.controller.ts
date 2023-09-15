import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFactoryDto, CreateUserDto } from './dto/create-main.dto';
import { UpdateUserDto } from './dto/update-main.dto';
import { FactoryService, UserService } from './main.service';

@ApiTags('main')
@Controller({
  version: '1',
  path: 'main/users',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

@ApiTags('main')
@Controller({
  version: '1',
  path: 'main/factories',
})
export class FactoryController {
  constructor(private readonly factoryService: FactoryService) {}

  @Post()
  create(@Body() createFactoryDto: CreateFactoryDto) {
    return this.factoryService.create(createFactoryDto);
  }

  @Get()
  findAll() {
    return this.factoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.factoryService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factoryService.remove(+id);
  }
}
