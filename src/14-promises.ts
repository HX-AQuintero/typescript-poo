import axios from "axios";

//Podemos tipar una promesa utilizando los genéricos
(async () => {
    function delay (time: number) {
        const promise = new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('me resolvi');
            }, time);
        });
        return promise;
    }

    async function getProducts() {
        const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
        return data;
    }

    console.log('---'.repeat(10));
    const rta = await delay(3000);
    console.log(rta);

    console.log('---'.repeat(10));
    const products = await getProducts();
    console.log(products);
    
})();
