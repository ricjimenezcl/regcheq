import { IsString, IsOptional, IsBoolean, IsArray } from 'class-validator';

export class CreateCatalogDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  @IsOptional()
  items?: string[];

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
