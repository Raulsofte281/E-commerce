import { db } from "../app.js";

async function getProduct(): Promise<any> {
    try{
        let product = await db.query("SELECT image, id FROM public.product");
        return product.rows;

    } catch(error){
        console.error('erro ao buscar produto', error)
        return 'erro ao buscar produto';
    }
}

export const paymentManagerService = {
    getProduct: () => getProduct()
}
