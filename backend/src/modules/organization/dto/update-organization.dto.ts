import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateOrganizationDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(200)
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  // slug format validation is not available in this class-validator version
  // @IsSlug()
  @MinLength(1)
  @MaxLength(128)
  slug?: string;
}

