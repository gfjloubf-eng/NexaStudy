import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LessonRepository {
  private readonly logger = new Logger(LessonRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  async findCourseById(courseId: string) {
    return this.prisma.course.findFirst({
      where: { id: courseId, deletedAt: null },
      select: { id: true },
    });
  }

  async findLessonByCourseAndSlug(courseId: string, slug: string) {
    return this.prisma.lesson.findFirst({
      where: { courseId, slug, deletedAt: null },
      select: { id: true },
    });
  }

  async createLesson(data: {
    courseId: string;
    slug: string;
    title: string;
    orderIndex: number;
    // contentPayload is not persisted here (LessonContent is separate model)
  }) {
    return this.prisma.lesson.create({
      data: {
        courseId: data.courseId,
        slug: data.slug,
        title: data.title,
        orderIndex: data.orderIndex,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        courseId: true,
        slug: true,
        title: true,
        orderIndex: true,
      },
    });
  }

  async listLessons(params: {
    courseId: string;
    offset?: number;
    limit?: number;
    search?: string;
  }) {
    const { courseId, offset = 0, limit = 50, search } = params;

    const where: Prisma.LessonWhereInput = {
      deletedAt: null,
      courseId,
      ...(search
        ? {
            OR: [
              { title: { contains: search, mode: 'insensitive' } },
              { slug: { contains: search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    return this.prisma.lesson.findMany({
      where,
      orderBy: { orderIndex: 'asc' },
      skip: offset,
      take: limit,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        courseId: true,
        slug: true,
        title: true,
        orderIndex: true,
      },
    });
  }
}

