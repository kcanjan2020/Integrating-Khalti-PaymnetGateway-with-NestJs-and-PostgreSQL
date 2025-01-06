import { Module } from '@nestjs/common';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethodController } from './payment-method.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentTransactionDetail } from './entities/payment-transaction-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentTransactionDetail])],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
})
export class PaymentMethodModule {}
