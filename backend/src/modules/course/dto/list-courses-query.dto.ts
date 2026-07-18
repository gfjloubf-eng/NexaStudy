import { IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class ListCoursesQueryDto {

  @IsOptional()
  @IsUUID()
  organizationId?: string;

  // For future extension; kept optional and validated.
  @IsOptional()
  @IsString()
  @MaxLength(128)
  search?: string;
}

