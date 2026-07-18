import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from './course.repository';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from '@prisma/client';

@Injectable()
export class CourseService {
  constructor(private readonly repo: CourseRepository) {}

  async createCourse(dto: CreateCourseDto): Promise<Pick<Course, 'id' | 'createdAt' | 'updatedAt' | 'organizationId' | 'slug' | 'title' | 'description'>> {
    const organization = await this.repo.findOrganizationById(dto.organizationId);
    if (!organization) {
      throw new NotFoundException('Organization not found');
    }

    const existing = await this.repo.findCourseByOrganizationAndSlug(dto.organizationId, dto.slug);
    if (existing) {
      throw new BadRequestException('Course slug already exists for this organization');
    }

    return this.repo.createCourse({
      organizationId: dto.organizationId,
      slug: dto.slug,
      title: dto.title,
      description: dto.description,
    });
  }

  async listCourses(params: { organizationId?: string; search?: string }) {
    return this.repo.listCourses({
      organizationId: params.organizationId,
      search: params.search,
    });
  }
}

