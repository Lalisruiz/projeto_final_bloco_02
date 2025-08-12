import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('categoria')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255 })
  titulo: string;

  @IsNotEmpty()
  @Column({ length: 255 })
  descricao: string;

  @CreateDateColumn({ type: 'datetime', name: 'data' })
  data: Date;
}


