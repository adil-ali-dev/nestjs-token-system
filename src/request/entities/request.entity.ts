import { UsageHistory } from 'src/usage_history/entities/usage_history.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Request {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column({ type: 'int', nullable: true, default: null })
  price_in_token: number;

  @Column({ nullable: true, default: false })
  isDeleted: boolean;

  @OneToMany((type) => UsageHistory, (usageHistory) => usageHistory.request)
  usageHistory: UsageHistory;

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
