import { db } from "../app.js";

async function getProduct(): Promise<string> {
    try{
        let product = await db.query("SELECT * FROM public.product WHERE id = $1");
        return product.rows[0];

    } catch(error){
        console.error('erro ao buscar produto', error)
        return 'erro ao buscar produto';
    }
}

export const paymentManagerService = {
    getProduct: () => getProduct()
}
