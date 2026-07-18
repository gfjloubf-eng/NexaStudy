import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { LessonRepository } from './lesson.repository';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonService {
  constructor(private readonly repo: LessonRepository) {}

  async createLesson(dto: CreateLessonDto) {
    const course = await this.repo.findCourseById(dto.courseId);
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const existing = await this.repo.findLessonByCourseAndSlug(dto.courseId, dto.slug);
    if (existing) {
      throw new BadRequestException('Lesson slug already exists for this course');
    }

    return this.repo.createLesson({
      courseId: dto.courseId,
      slug: dto.slug,
      title: dto.title,
      orderIndex: dto.orderIndex,
    });
  }

  async listLessons(params: {
    courseId: string;
    offset?: number;
    limit?: number;
    search?: string;
  }) {
    const course = await this.repo.findCourseById(params.courseId);
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    return this.repo.listLessons({
      courseId: params.courseId,
      offset: params.offset,
      limit: params.limit,
      search: params.search,
    });
  }
}

