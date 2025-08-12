import { IsNotEmpty } from 'class-validator';

export class CreateCategoriaDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descricao: string;
}
