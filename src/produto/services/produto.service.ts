import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Produto } from '../entities/produto.entity';

@Injectable()
export class ProdutoService {
  /**
   * Atualiza apenas a quantidade em estoque de um produto pelo id.
   * @param id - id do produto
   * @param quantidade - nova quantidade em estoque
   */
  // Atualiza apenas a quantidade em estoque de um produto pelo id
  async updateQuantidade(id: number, quantidade: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOneBy({ id });
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    produto.quantidade = quantidade;
    return this.produtoRepository.save(produto);
  }

  /**
   * Atualiza apenas o preço de um produto pelo id.
   * @param id - id do produto
   * @param preco - novo preço
   */
  // Atualiza apenas o preço de um produto pelo id
  async updatePreco(id: number, preco: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOneBy({ id });
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    produto.preco = preco;
    return this.produtoRepository.save(produto);
  }

  /**
   * Busca produtos pelo preço exato.
   * @param preco - valor do preço a ser buscado
   */
  // Busca produtos cujo preço contenha o valor informado (busca parcial)
  async findByPreco(preco: number): Promise<Produto[]> {
    return this.produtoRepository.createQueryBuilder('produto')
      .where('CAST(produto.preco AS CHAR) LIKE :preco', { preco: `%${preco}%` })
      .getMany();
  }
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  // Cria um novo produto
  async create(produto: Produto): Promise<Produto> {
    const newProduto = this.produtoRepository.create(produto);
    return this.produtoRepository.save(newProduto);
  }

  // Retorna todos os produtos cadastrados
  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  // Busca um produto pelo id
  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOneBy({ id });
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  // Busca produtos pelo nome (busca parcial, case-insensitive)
  async findAllByNome(nome: string): Promise<Produto[]> {
    return this.produtoRepository.find({
      where: { nome: Like(`%${nome}%`) },
    });
  }

  // Atualiza todos os campos de um produto pelo id (exceto id)
  async update(id: number, produtoData: Produto): Promise<Produto> {
    const { id: _, ...rest } = produtoData;
    const produto = await this.produtoRepository.preload({
      id,
      ...rest,
    });
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return this.produtoRepository.save(produto);
  }

  // Deleta um produto pelo id
  async delete(id: number): Promise<{ message: string }> {
    const produto = await this.produtoRepository.findOneBy({ id });
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    await this.produtoRepository.remove(produto);
    return { message: 'Produto deletado com sucesso' };
  }
}