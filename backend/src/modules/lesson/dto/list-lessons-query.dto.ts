import { IsInt, IsOptional, IsString, MaxLength, Min, Max } from 'class-validator';

export class ListLessonsQueryDto {

  @IsOptional()
  @IsString()
  @MaxLength(128)
  search?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  offset?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;
}

