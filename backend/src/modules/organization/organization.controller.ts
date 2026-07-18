import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { ListOrganizationsQueryDto } from './dto/list-organizations-query.dto';

@Controller({
  path: 'organizations',
  version: '1',
})
export class OrganizationController {
  constructor(private readonly service: OrganizationService) {}

  @Get()
  async list(@Query() query: ListOrganizationsQueryDto) {
    return this.service.listOrganizations({
      offset: query.offset,
      limit: query.limit,
      search: query.search,
    });
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.service.getOrganizationById(id);
  }

  @Post()
  async create(@Body() dto: CreateOrganizationDto) {
    return this.service.createOrganization(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateOrganizationDto) {
    return this.service.updateOrganization(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.deleteOrganization(id);
  }
}

