import { IsInt, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class ListOrganizationsQueryDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsOptional()
  @IsString()
  // slug is optional but validated when present; supports searching via `slug`.
  slug?: string;

  @IsOptional()
  @IsString()
  // name search, optional.
  search?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  offset?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number;
}

