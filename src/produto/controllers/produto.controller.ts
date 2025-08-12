import { Controller, Get, Post, Body, Param, Delete, Put, HttpCode, HttpStatus, ParseIntPipe, Patch } from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../entities/produto.entity';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get('preco/:preco') // Busca produtos pelo preço (parcial)
  @HttpCode(HttpStatus.OK)
  findByPreco(@Param('preco') preco: number): Promise<Produto[]> {
    return this.produtoService.findByPreco(preco);
  }

  @Get(':id') // Busca um produto pelo id
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @Put(':id') // Atualiza um produto pelo id
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseIntPipe) id: number, // id do produto a ser atualizado
    @Body() produto: Produto
  ): Promise<Produto> {
    return this.produtoService.update(id, produto);
  }

  @Patch(':id/preco') // Atualiza o preço de um produto pelo id
  @HttpCode(HttpStatus.OK)
  async updatePreco(
    @Param('id', ParseIntPipe) id: number,
    @Body('preco') preco: number
  ): Promise<Produto> {
  return this.produtoService.updatePreco(id, preco);
}

@Patch(':id/quantidade') // Atualiza a quantidade de um produto pelo id
@HttpCode(HttpStatus.OK)
async updateQuantidade(
  @Param('id', ParseIntPipe) id: number,
  @Body('quantidade') quantidade: number
): Promise<Produto> {
  return this.produtoService.updateQuantidade(id, quantidade);
}

  @Delete(':id') // Deleta um produto pelo id
  @HttpCode(HttpStatus.OK)
  delete(@Param("id", ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.produtoService.delete(id);
  }
}