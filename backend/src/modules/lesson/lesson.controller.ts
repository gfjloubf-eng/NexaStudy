import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { LessonService } from './lesson.service';

import { CreateLessonDto } from './dto/create-lesson.dto';
import { ListLessonsQueryDto } from './dto/list-lessons-query.dto';

@Controller({
  path: 'courses',
  version: '1',
})
export class LessonController {
  constructor(private readonly service: LessonService) {}

  @Get(':courseId/lessons')
  async list(
    @Param('courseId') courseId: string,
    @Query() query: ListLessonsQueryDto,
  ) {
    return this.service.listLessons({
      courseId,
      offset: query.offset,
      limit: query.limit,
      search: query.search,
    });
  }

  @Post(':courseId/lessons')
  async create(
    @Param('courseId') courseId: string,
    @Body() dto: CreateLessonDto,
  ) {
    // courseId from route is the source of truth
    return this.service.createLesson({ ...dto, courseId });
  }
}

