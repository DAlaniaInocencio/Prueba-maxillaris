import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/create.dto';
import { UpdateTaskDto } from '../dto/update.dto';

@Controller('tasks')
export class TasksControllers {
  constructor(private tasksService: TasksService) {}
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }
  @Post()
  create(@Body() body: CreateTaskDto): Promise<Task> {
    try {
      return this.tasksService.create(body);
    } catch (error: any) {
      throw new InternalServerErrorException('Error al crear el task');
    }
  }
  @Get(':id')
  findId(@Param('id') id: number): Promise<Task> {
    try {
      return this.tasksService.findOne(id);
    } catch (error: any) {
      throw new NotFoundException(`task con ID ${id} no encontrado`);
    }
  }

  @Put(':id')
  Update(@Param('id') id: number, @Body() body: UpdateTaskDto) {
    try {
      this.tasksService.update(id, body);
      return 'task update';
    } catch (error: any) {
      throw new NotFoundException(`task con ID ${id} no encontrado`);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      await this.tasksService.borrado(id);
      return 'task delete';
    } catch (error: any) {
      throw new NotFoundException(`task con ID ${id} no encontrado`);
    }
  }

  @Patch(':id/completed')
  async restaurar(@Param('id') id: number) {
    try {
      await this.tasksService.completado(id);
      return 'task completed';
    } catch (error: any) {
      throw new NotFoundException(`task con ID ${id} no encontrado`);
    }
  }
}
