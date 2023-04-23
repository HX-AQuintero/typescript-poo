import { IsEnum, IsUrl, IsNotEmpty, IsOptional, Length, validateOrReject } from 'class-validator';
import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id' | 'category' | 'createdAt' | 'updateAt'>{
  categoryId: Category['id'];
}

export class CreateCategoryDto implements ICreateCategoryDto {
  categoryId!: number;

  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'Alejo';
    dto.image = 'https://www.holasoyunaurl.com';
    await validateOrReject(dto);
    
  } catch (error) {
    console.log(error);
    
  }
})()