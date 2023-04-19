import axios from "axios";
import { Product } from "./models/product.model";

//Podemos tipar una promesa utilizando los genéricos, así como las respuestas de la API
(async () => {
    async function getProducts(): Promise<Product[]> {
        const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        //Otra opción es usando el asertion as, depende si la librería soporta el tipado anterior:
        //const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        //const data = rta.data as Product[]
        return data;
    }

    const products = await getProducts();
    console.log(products.map(item => `${item.id} - ${item.title}`));
})();
