import { ProductHttpService } from "./services/product-http.service";


(async () => {
  const productService =  ProductHttpService.getInstance();
  
  try {
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(item => item.price));
  
    const productId = products[0].id;
    await productService.update(productId, {
      price: 5000,
      title: 'Esto es una actualización',
      description: 'lala lala lala la'
    });
  
    const productFound = await productService.findOne(productId);
    console.log(productFound);

    const productDeleted = await productService.delete(productId);
    console.log(productDeleted);
    
  } catch (error) {
    console.error(error);
  }
  
})();