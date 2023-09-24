import { ApiProperty, PartialType } from '@nestjs/swagger';

class UserDto {
  //
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

  workstation?: string;

  country?: string;

  extension?: string;

  lastlogin_date?: Date;

  lastpasswordchange_date?: Date;

  title?: string;

  outofoffice_message?: string;

  is_admin?: boolean;

  is_active?: boolean;

  @ApiProperty({ default: false })
  deletion_flag?: boolean;

  is_out_of_office?: boolean;

  id_old?: string;

  // CMDB related

  ad_status?: 'ENABLED' | 'DISABLED' | 'OFFBOARD';

  staff_status?: 'ACTIVE' | 'RESIGNED';

  entry_date?: Date;

  leaving_date?: Date;

  engineer_teams?: string[];

  //
  // manager_id?: number;

  department?: string[];
}

export class CreateUserDto extends PartialType(UserDto) {}

export class UpdateUserDto extends PartialType(UserDto) {}
