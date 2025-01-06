import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform((v) => Number(v.value))
  price: number;

  @IsOptional()
  @IsNumber()
  @Transform((v) => Number(v.value))
  discountPercentage: number;

  @IsOptional()
  @IsNumber()
  @Transform((v) => Number(v.value))
  productDeliveryCharge: number;

  @IsOptional()
  @IsNumber()
  @Transform((v) => Number(v.value))
  productServiceCharge: number;

  @IsOptional()
  @IsNotEmpty()
  @Transform((v) => Number(v.value))
  stock: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  productImage?: any;
}
