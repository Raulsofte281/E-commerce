import { Router } from 'express'; 
const paymentRouter = Router();
import paymentManagerController from '../controller/ProductList.controller.js';

paymentRouter.get("/payment", paymentManagerController.getProduct);

export default paymentRouter; 