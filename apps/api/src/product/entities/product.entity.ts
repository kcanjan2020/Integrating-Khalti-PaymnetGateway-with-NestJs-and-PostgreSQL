import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productName: string;

  @Column({ type: 'text' })
  description: string;

  @Column('bigint')
  price: number;

  @Column({ nullable: true })
  discountPercentage: number;

  @Column({ nullable: true, type: 'bigint' })
  productDeliveryCharge: number;

  @Column({ nullable: true, type: 'bigint' })
  productServiceCharge: number;

  @Column({ type: 'bigint' })
  totalPrice: number;

  @Column({ type: 'bigint' })
  stock: number;

  @Column()
  brand: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn([{ type: 'timestamp' }])
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true, type: 'timestamp' })
  deletedAt: Date;
}
