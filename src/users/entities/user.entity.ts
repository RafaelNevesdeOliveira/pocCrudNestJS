import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

// Colunas da tabela
@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: number;

  @Prop()
  password: string;
  static nome: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
