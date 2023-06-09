import { faker } from '@faker-js/faker';
import { Product } from "../models/product.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  getAll () {
    return this.products;
  }

  create (data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
        createdAt: faker.date.recent(),
        updateAt: faker.date.recent()
      }
    }
    return this.add(newProduct);
  };

  add (product: Product) {
    this.products.push(product);
    return product;
  }

  update (id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex(product => product.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  };

  findOne(id: Product['id']) {
    return this.products.find(item => item.id === id);
  };

  delete(id: Product['id']): Product[] {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      return this.products;
    } else {
      this.products.splice(index, 1);
      return this.products;
    }
  }
}