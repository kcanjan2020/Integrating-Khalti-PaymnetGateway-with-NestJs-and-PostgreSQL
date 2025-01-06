import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PaymentMethod } from 'src/enum/payment.method';
import { PaymentStatus } from 'src/enum/payment.status';

export class CreateOrderItemDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  produtName: string;

  @IsNotEmpty()
  @Transform((v) => new Date(v.value))
  @IsDate()
  orderDate: Date;

  @IsNotEmpty()
  @IsNumber()
  @Transform((v) => Number(v.value))
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @Transform((v) => Number(v.value))
  quantity: number;

  @IsOptional()
  @IsNumber()
  @Transform((v) => Number(v.value))
  discountPercentage?: number;

  @IsOptional()
  @IsNumber()
  @Transform((v) => Number(v.value))
  deliveryCharge?: number;

  @IsOptional()
  @IsNumber()
  @Transform((v) => Number(v.value))
  serviceCharge?: number;

  @IsOptional()
  @IsNumber()
  @Transform((v) => Number(v.value))
  taxAmount?: number;

  @IsNotEmpty()
  @IsNumber()
  @Transform((v) => Number(v.value))
  totalPrice: number;

  @IsNotEmpty()
  @IsEnum(PaymentMethod)
  paymentMethod: string;

  @IsNotEmpty()
  @IsEnum(PaymentStatus)
  status: string;
}
