import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModuleRoot } from './config/configModuleRoot';
import { ConfigTypOrmModule } from './config/configTypeOrm';

@Module({
  imports: [ConfigModuleRoot, ConfigTypOrmModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
