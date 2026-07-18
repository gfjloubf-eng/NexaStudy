import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(200)
  name!: string;

  @IsString()
  @IsNotEmpty()
  // slug format validation is not available in this class-validator version
  // @IsSlug()
  @MinLength(1)
  @MaxLength(128)
  slug!: string;

  // kept for forward compatibility; not persisted
  @IsOptional()
  @IsString()
  @MaxLength(500)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description?: string;
}

