import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { OrganizationRepository } from './organization.repository';

@Injectable()
export class OrganizationService {
  constructor(private readonly repo: OrganizationRepository) {}

  async listOrganizations(params: { offset?: number; limit?: number; search?: string }) {
    return this.repo.listOrganizations(params);
  }

  async getOrganizationById(id: string) {
    const organization = await this.repo.getOrganizationById(id);
    if (!organization) {
      throw new NotFoundException('Organization not found');
    }
    return organization;
  }

  async createOrganization(dto: CreateOrganizationDto) {
    const existingBySlug = await this.repo.getOrganizationBySlug(dto.slug);
    if (existingBySlug) {
      throw new BadRequestException('Organization slug already exists');
    }

    const existingByName = await this.repo.findByName(dto.name);
    if (existingByName) {
      throw new BadRequestException('Organization name already exists');
    }

    return this.repo.createOrganization({ name: dto.name, slug: dto.slug });
  }

  async updateOrganization(id: string, dto: UpdateOrganizationDto) {
    const existing = await this.repo.getOrganizationById(id);
    if (!existing) {
      throw new NotFoundException('Organization not found');
    }

    if (dto.slug && dto.slug !== existing.slug) {
      const slugOwner = await this.repo.getOrganizationBySlug(dto.slug);
      if (slugOwner && slugOwner.id !== id) {
        throw new BadRequestException('Organization slug already exists');
      }
    }

    if (dto.name && dto.name !== existing.name) {
      const nameOwner = await this.repo.findByName(dto.name);
      if (nameOwner && nameOwner.id !== id) {
        throw new BadRequestException('Organization name already exists');
      }
    }

    return this.repo.updateOrganization(id, { name: dto.name, slug: dto.slug });
  }

  async deleteOrganization(id: string) {
    const existing = await this.repo.getOrganizationById(id);
    if (!existing) {
      throw new NotFoundException('Organization not found');
    }

    return this.repo.deleteOrganization(id);
  }
}

