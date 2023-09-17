import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
