import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  dob: Date | null;

  @Column({ nullable: true })
  gender: string | null;

  @Column({ nullable: true })
  phone: string | null;

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  modifiedat: Date;

  constructor() {
    this.id = uuidv4();
    this.createdat = new Date();
  }
}
