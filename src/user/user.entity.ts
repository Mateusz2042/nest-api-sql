import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  firstName: string;

  @Column('text')
  lastName: string;

  @Column()
  birthDate: string;

  @Column()
  email: string;

  @Column()
  login: string;

  @Column()
  password: string;
}
