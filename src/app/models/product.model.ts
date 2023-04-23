import { BaseModel } from "./base.model";
import { Category } from "./category.model";

export interface Product extends BaseModel {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
}

