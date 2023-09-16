import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
export type UserDocument = HydratedDocument<User>;

// User
@Schema()
export class User {
  // @Prop()
  // id?: number;

  @Prop({ required: true })
  erp_name: string;

  @Prop()
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  badge_no: string;

  @Prop()
  mobilephone: string;

  @Prop()
  workstation: string;

  @Prop()
  country: string;

  @Prop()
  extension: string;

  @Prop()
  lastlogin_date: Date;

  @Prop()
  lastpasswordchange_date: Date;

  @Prop()
  title: string;

  @Prop()
  outofoffice_message: string;

  @Prop()
  is_admin: boolean;

  @Prop()
  is_active: boolean;

  @Prop()
  is_out_of_office: boolean;

  @Prop()
  id_old: string;

  // CMDB related
  @Prop()
  ad_status: 'ENABLED' | 'DISABLED' | 'OFFBOARD';

  @Prop()
  staff_status: 'ACTIVE' | 'RESIGNED';

  @Prop()
  entry_date: Date;

  @Prop()
  leaving_date: Date;

  @Prop()
  engineer_teams?: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  manager_id?: User;

  @Prop([String])
  department?: string[];

  @Prop({ default: false })
  delete_flag: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Factory
@Schema()
export class Factory {
  @Prop({ required: true })
  fac_code: string;

  @Prop()
  name: string;

  @Prop({ default: true })
  is_active?: boolean;
}

export const FactorySchema = SchemaFactory.createForClass(Factory);
