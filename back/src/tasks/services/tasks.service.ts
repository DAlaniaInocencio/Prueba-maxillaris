import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/create.dto';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }
  async findOne(id: number): Promise<Task> {
    try {
      const task = await this.taskRepository.findOneBy({ id });
      if (!task) {
        throw new NotFoundException(`task con ID ${id} no encontrado`);
      }
      return task;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener el task: ${error.message}`,
      );
    }
  }
  async create(createtask: CreateTaskDto) {
    const searchtitle = await this.taskRepository.findOneBy({
      title: createtask.title,
    });
    if (searchtitle) {
      throw new BadRequestException('El titulo ya se encuentra registrado');
    }
    const { title, description, ...rest} = createtask;
    const newtask = this.taskRepository.create({
      title,
      description,
    });
    try {
      const resultado = await this.taskRepository.save(newtask);
      return resultado;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al crear un nuevo task: ${error.message}`,
        error.stack,
      );
    }
  }
  async update(id: number, updateData: Partial<Task>) {

    try {
      const result = await this.taskRepository.update(id, updateData);
      if (result.affected === 0) {
        throw new NotFoundException(`task con ID ${id} no encontrado`);
      }
      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al actualizar el task: ${error.message}`,
      );
    }
  }
  async borrado(id: number){
    try {
      const result = await this.taskRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`task con ID ${id} no encontrado`);
      }
      return 'task remove';
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al eliminar el task: ${error.message}`,
      );
    }
  }
  async completado(id: number) {
    try {
      const result = await this.taskRepository.findOneBy({ id });
      if (!result) {
        throw new NotFoundException(`task con ID ${id} no encontrado`);
      }
      result.completed = true;
      await this.taskRepository.save(result);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al actualizar la tarea: ${error.message}`,
      );
    }
  }
}
