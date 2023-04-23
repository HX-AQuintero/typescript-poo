import axios from "axios";

import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpService<TypeClass> {
  // private data: TypeClass[] = [];

  constructor(
    protected url: string
  ) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);

  const rta = (await productService.getAll());
  console.log(rta);

  productService.update<Product['id'],UpdateProductDto>(4, {
    price: 2300,
      title: 'Actualizacion prueba',
      description: 'lorem ipsum'
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);

  const rta1 = await categoryService.getAll();
  console.log(rta1);

})();