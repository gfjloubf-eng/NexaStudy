import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Organization } from '@prisma/client';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrganizationRepository {
  private readonly logger = new Logger(OrganizationRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  async createOrganization(data: { name: string; slug: string }): Promise<Organization> {
    return this.prisma.organization.create({
      data: {
        name: data.name,
        slug: data.slug,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        name: true,
        slug: true,
      },
    });
  }

  async updateOrganization(
    organizationId: string,
    data: { name?: string; slug?: string },
  ): Promise<Organization> {
    return this.prisma.organization.update({
      where: { id: organizationId },
      data: {
        ...(data.name ? { name: data.name } : {}),
        ...(data.slug ? { slug: data.slug } : {}),
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        name: true,
        slug: true,
      },
    });
  }

  async deleteOrganization(organizationId: string): Promise<Organization> {
    return this.prisma.organization.update({
      where: { id: organizationId },
      data: {
        deletedAt: new Date(),
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        name: true,
        slug: true,
      },
    });
  }

  async getOrganizationById(id: string): Promise<Organization | null> {
    return this.prisma.organization.findFirst({
      where: { id, deletedAt: null },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        name: true,
        slug: true,
      },
    });
  }

  async getOrganizationBySlug(slug: string): Promise<Organization | null> {
    return this.prisma.organization.findFirst({
      where: { slug, deletedAt: null },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        name: true,
        slug: true,
      },
    });
  }

  async findByName(name: string): Promise<Organization | null> {
    return this.prisma.organization.findFirst({
      where: {
        deletedAt: null,
        // name is not unique in schema; use case-insensitive contains/exact based on strictness.
        name: { equals: name, mode: 'insensitive' },
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        name: true,
        slug: true,
      },
    });
  }

  async listOrganizations(params: {
    offset?: number;
    limit?: number;
    search?: string;
  }): Promise<Organization[]> {
    const { offset = 0, limit = 50, search } = params;

    const where: Prisma.OrganizationWhereInput = {
      deletedAt: null,
      ...(search
        ? {
            OR: [
              { name: { contains: search, mode: 'insensitive' } },
              { slug: { contains: search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    return this.prisma.organization.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: offset,
      take: limit,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        name: true,
        slug: true,
      },
    });
  }
}

