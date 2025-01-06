import { PaymentMethod } from 'src/enum/payment.method';
import { PaymentStatus } from 'src/enum/payment.status';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productId: string;

  @Column()
  produtName: string;

  @Column('date')
  orderDate: Date;

  @Column('bigint')
  price: number;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  discountPercentage?: number;

  @Column({ nullable: true, type: 'bigint' })
  deliveryCharge?: number;

  @Column({ nullable: true, type: 'bigint' })
  serviceCharge?: number;

  @Column({ nullable: true, type: 'bigint' })
  taxAmount?: number;

  @Column('bigint')
  totalPrice: number;

  @Column({ default: PaymentStatus.PENDING })
  paymentStatus: PaymentStatus;

  @Column()
  paymentMethod: PaymentMethod;
}
