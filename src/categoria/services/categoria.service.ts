import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';


@Injectable()
export class CategoriaService {
  async findAllByTitulo(titulo: string): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      where: { titulo: Like(`%${titulo}%`) },
    });
  }

  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOneBy({ id });
    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }
    return categoria;
  }
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(categoria: Categoria): Promise<Categoria> {
    const newCategoria = this.categoriaRepository.create(categoria);
    return this.categoriaRepository.save(newCategoria);
  }

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOneBy({ id });
    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }
    return categoria;
  }

  async update(id: number, categoriaData: Categoria): Promise<Categoria> {
    // Remove o id do objeto categoriaData para evitar sobrescrita
    const { id: _, ...rest } = categoriaData;
    const categoria = await this.categoriaRepository.preload({
      id,
      ...rest,
    });
    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }
    return this.categoriaRepository.save(categoria);
  }

  async delete(id: number): Promise<void> {
    const categoria = await this.categoriaRepository.findOneBy({ id });
    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }
    await this.categoriaRepository.delete(categoria);
  }
}
