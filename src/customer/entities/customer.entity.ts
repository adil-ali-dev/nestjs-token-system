import { TokenPurchaseHistory } from 'src/token_purchase_history/entities/token_purchase_history.entity';
import { UsageHistory } from 'src/usage_history/entities/usage_history.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'int', nullable: true, default: null })
  tokens: number;

  @Column({ nullable: true, default: false })
  isDeleted: boolean;

  @OneToMany((type) => UsageHistory, (usageHistory) => usageHistory.customer)
  usageHistory: UsageHistory;

  @OneToMany(
    (type) => TokenPurchaseHistory,
    (tokenPurchaseHistory) => tokenPurchaseHistory.customer,
  )
  tokenPurchaseHistory: TokenPurchaseHistory;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
