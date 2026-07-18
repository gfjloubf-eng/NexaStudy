import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { CourseRepository } from './course.repository';

@Module({
  imports: [PrismaModule],
  controllers: [CourseController],
  providers: [CourseService, CourseRepository],
  exports: [CourseService],
})
export class CourseModule {}

