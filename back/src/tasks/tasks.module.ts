import { Module } from '@nestjs/common';
import { TasksService } from './services/tasks.service';
import { TasksControllers } from './controllers/tasks.controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksControllers],
  providers: [TasksService],
})
export class TasksModule {}
