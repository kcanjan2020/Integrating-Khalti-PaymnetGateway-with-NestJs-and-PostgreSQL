import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { OrderItemModule } from './order-item/order-item.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (confingService: ConfigService) => {
        return {
          type: 'postgres',
          host: confingService.get('DB_HOST'),
          port: confingService.get('DB_PORT'),
          username: confingService.get('DB_USERNAME'),
          password: confingService.get('DB_PASSWORD'),
          database: confingService.get('DB_DATABASE'),
          autoLoadEntities: true,
        };
      },
      inject: [ConfigService],
    }),
    ProductModule,
    OrderItemModule,
    PaymentMethodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
