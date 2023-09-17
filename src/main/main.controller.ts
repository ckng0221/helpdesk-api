import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { CreateFactoryDto, UpdateFactoryDto } from './dto/factory.dto';
import { FactoryService, UserService } from './main.service';

@ApiBearerAuth()
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
  @ApiQuery({
    name: 'erp_name',
    required: false,
  })
  @ApiQuery({
    name: 'name',
    required: false,
  })
  @ApiQuery({
    name: 'email',
    required: false,
  })
  findAll(
    @Query('erp_name') erp_name?: string,
    @Query('name') name?: string,
    @Query('email') email?: string,
  ) {
    const queryParams = { erp_name, name, email };
    return this.userService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
@ApiBearerAuth()
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
  @ApiQuery({
    name: 'fac_code',
    required: false,
  })
  @ApiQuery({
    name: 'name',
    required: false,
  })
  findAll(@Query('fac_code') fac_code?: string, @Query('name') name?: string) {
    const queryParams = { fac_code, name };

    return this.factoryService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factoryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactoryDto: UpdateFactoryDto) {
    return this.factoryService.update(id, updateFactoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factoryService.remove(id);
  }
}
