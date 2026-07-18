import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { ListCoursesQueryDto } from './dto/list-courses-query.dto';

@Controller({
  path: 'courses',
  version: '1',
})
export class CourseController {
  constructor(private readonly service: CourseService) {}

  @Get()
  async list(@Query() query: ListCoursesQueryDto) {
    return this.service.listCourses({ organizationId: query.organizationId, search: query.search });
  }

  @Post()
  async create(@Body() dto: CreateCourseDto) {
    return this.service.createCourse(dto);
  }
}

