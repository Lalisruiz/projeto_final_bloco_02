import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { IsNotEmpty } from 'class-validator';

@Entity('produto')
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 255 })
    nome: string; // nome do produto

    @IsNotEmpty()
    @Column({ length: 255 })
    marca: string; // marca do produto

    @IsNotEmpty()
    @Column('decimal', { precision: 10, scale: 2 })
    preco: number; // preço do produto

    @IsNotEmpty()
    @Column('int')
    quantidade: number; // quantidade em estoque

    @IsNotEmpty()
    @Column({ length: 255 })
    descricao: string; // descrição do produto

    @CreateDateColumn()
    data: Date; // data de criação do produto

    @ManyToOne(() => Categoria, categoria => categoria.produtos, { eager: true, onDelete: 'CASCADE' })
    categoria: Categoria; // Uma categoria para o produto
}