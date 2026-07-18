import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { LessonRepository } from './lesson.repository';

@Module({
  imports: [PrismaModule],
  controllers: [LessonController],
  providers: [LessonService, LessonRepository],
  exports: [LessonService],
})
export class LessonModule {}

