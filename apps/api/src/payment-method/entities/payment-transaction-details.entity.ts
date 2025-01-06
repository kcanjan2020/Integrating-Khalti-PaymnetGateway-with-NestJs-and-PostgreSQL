import { PaymentMethod } from 'src/enum/payment.method';
import { PaymentStatus } from 'src/enum/payment.status';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class PaymentTransactionDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, type: 'varchar' })
  trasactionId: string;

  @Column({ type: 'varchar', unique: true })
  pidx: string;

  @Column()
  productId: string;

  @Column('bigint')
  amount: number;

  @Column({ type: 'json', nullable: true })
  dataFromVericationRequest: Record<string, any>;

  @Column()
  apiQueryFromUser: string;

  @Column({ type: 'enum', enum: PaymentMethod })
  paymentMethod: PaymentMethod;

  @Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING })
  status: PaymentStatus;

  @Column({ type: 'timestamp', default: new Date() })
  paymentDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
