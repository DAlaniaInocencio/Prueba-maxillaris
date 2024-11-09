import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateTaskDto } from './create.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
