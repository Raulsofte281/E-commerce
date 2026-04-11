import type { Request, Response } from "express";
import { paymentManagerService } from "../service/productList.service.js";


const paymentManagerController = {
    getProduct: async (req: Request, res: Response): Promise<void> => {
        try {                
            const retorno = await paymentManagerService.getProduct();
            res.status(200).json(retorno);        
        } 
        catch (error: any) {
            if (error.message === 'produto não encontrado') {
                res.status(404).send(error.message);
            } else {
                    console.error('Erro no controller:', error);
                    res.status(500).send('Ocorreu um erro no servidor ao tentar buscar o produto.');
                }
        }
    }
}

export default paymentManagerController;