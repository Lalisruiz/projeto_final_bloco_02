import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
// importações de DTO foram removidas, pois não são mais necessárias
import { Categoria } from '../entities/categoria.entity';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() categoria: Categoria,
  ): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }
  
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.categoriaService.findById(id);
  
  }
  @Get("/titulo/:titulo")
  @HttpCode(HttpStatus.OK)
  findAllByTitulo(@Param("titulo") titulo: string): Promise<Categoria[]> {
    return this.categoriaService.findAllByTitulo(titulo);
  
  }
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.categoriaService.findAll();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  partialUpdate(@Param('id', ParseIntPipe) id: number, @Body() categoria: Categoria) {
    return this.categoriaService.update(id, categoria);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoria: Categoria
  ) {
    // Garante que o id não será alterado pelo corpo
    return this.categoriaService.update(id, categoria);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param("id", ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.categoriaService.delete(id);
  }
}
