import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatalogDocument = Catalog & Document;

@Schema({ timestamps: true }) // Agrega createdAt y updatedAt automáticamente
export class Catalog {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], default: [] })
  items: string[];

  @Prop({ default: true })
  isActive: boolean;
}

export const CatalogSchema = SchemaFactory.createForClass(Catalog);
