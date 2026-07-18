import { IsOptional, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateCourseDto {
  @IsUUID()
  organizationId!: string;


  @IsString()
  @MinLength(1)
  @MaxLength(128)
  slug!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(256)
  title!: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string | null;
}

