import { ApiProperty, PartialType } from '@nestjs/swagger';

class FactoryDto {
  @ApiProperty({ example: '0001' })
  fac_code: string;

  @ApiProperty({ example: 'Factory1' })
  name: string;

  @ApiProperty({ default: 'true' })
  is_active?: boolean;
}

export class CreateFactoryDto extends PartialType(FactoryDto) {}

export class UpdateFactoryDto extends PartialType(CreateFactoryDto) {}
