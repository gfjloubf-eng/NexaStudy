import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CourseRepository {
  private readonly logger = new Logger(CourseRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  async findOrganizationById(organizationId: string) {
    return this.prisma.organization.findFirst({
      where: { id: organizationId, deletedAt: null },
      select: { id: true },
    });
  }

  async findCourseByOrganizationAndSlug(organizationId: string, slug: string) {
    return this.prisma.course.findFirst({
      where: {
        organizationId,
        slug,
        deletedAt: null,
      },
      select: { id: true },
    });
  }

  async createCourse(data: {
    organizationId: string;
    slug: string;
    title: string;
    description?: string | null;
  }) {
    return this.prisma.course.create({
      data: {
        organizationId: data.organizationId,
        slug: data.slug,
        title: data.title,
        description: data.description ?? null,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        organizationId: true,
        slug: true,
        title: true,
        description: true,
      },
    });
  }

  async listCourses(params: {
    organizationId?: string;
    skip?: number;
    take?: number;
    search?: string;
  }) {
    const { organizationId, skip = 0, take = 50, search } = params;

    const where: Prisma.CourseWhereInput = {
      deletedAt: null,
      ...(organizationId ? { organizationId } : {}),
      ...(search
        ? {
            OR: [
              { title: { contains: search, mode: 'insensitive' } },
              { slug: { contains: search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    return this.prisma.course.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        organizationId: true,
        slug: true,
        title: true,
        description: true,
      },
    });
  }
}

