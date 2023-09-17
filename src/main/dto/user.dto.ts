import { ApiProperty, PartialType } from '@nestjs/swagger';

class UserDto {
  // @ApiProperty()
  // id?: number;

  @ApiProperty({ example: 'alice' })
  erp_name: string;

  @ApiProperty({ example: 'Alice' })
  name: string;

  @ApiProperty({ format: 'email' })
  email: string;

  @ApiProperty({ example: '123412' })
  badge_no?: string;

  @ApiProperty({ example: '+6011-1234567' })
  mobilephone?: string;

  @ApiProperty()
  workstation?: string;

  @ApiProperty()
  country?: string;

  @ApiProperty()
  extension?: string;

  @ApiProperty()
  lastlogin_date?: Date;

  @ApiProperty()
  lastpasswordchange_date?: Date;

  @ApiProperty()
  title?: string;

  @ApiProperty()
  outofoffice_message?: string;

  @ApiProperty()
  is_admin?: boolean;

  @ApiProperty()
  is_active?: boolean;

  @ApiProperty({ default: false })
  deletion_flag?: boolean;

  @ApiProperty()
  is_out_of_office?: boolean;

  @ApiProperty()
  id_old?: string;

  // CMDB related
  @ApiProperty()
  ad_status?: 'ENABLED' | 'DISABLED' | 'OFFBOARD';

  @ApiProperty()
  staff_status?: 'ACTIVE' | 'RESIGNED';

  @ApiProperty()
  entry_date?: Date;

  @ApiProperty()
  leaving_date?: Date;

  @ApiProperty()
  engineer_teams?: string[];

  // @ApiProperty()
  // manager_id?: number;

  @ApiProperty()
  department?: string[];
}

export class CreateUserDto extends PartialType(UserDto) {}

export class UpdateUserDto extends PartialType(UserDto) {}
