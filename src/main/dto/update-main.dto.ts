import { PartialType } from '@nestjs/swagger';
import { CreateFactoryDto, CreateUserDto } from './create-main.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class UpdateFactoryDto extends PartialType(CreateFactoryDto) {}
