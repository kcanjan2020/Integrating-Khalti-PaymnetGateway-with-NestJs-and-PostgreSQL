import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { OrderItemModule } from './order-item/order-item.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';

@Module({
  imports: [ProductModule, OrderItemModule, PaymentMethodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
