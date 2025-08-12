import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Produto } from '../../produto/entities/produto.entity';

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

    @CreateDateColumn()
    data: Date;

    @OneToMany(() => Produto, produto => produto.categoria)
    produtos: Produto[]; // Um array de produtos pertencentes a esta categoria
}



