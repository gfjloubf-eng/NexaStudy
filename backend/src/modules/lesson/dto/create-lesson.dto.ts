import { IsInt, IsOptional, IsString, IsUUID, MaxLength, Min, Max, MinLength } from 'class-validator';

export class CreateLessonDto {
  @IsUUID()
  courseId!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(128)
  slug!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(256)
  title!: string;

  @IsInt()
  @Min(0)
  @Max(1_000_000)
  orderIndex!: number;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  // Currently unused (LessonContent is a separate model), but reserved for future extension.
  contentPayload?: string;
}

