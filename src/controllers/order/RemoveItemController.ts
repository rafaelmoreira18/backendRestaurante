import {Request, Response} from 'express'
import { RemoveItemService} from '../../services/order/RemoveItemService'

class RemoveItemController{
    async handle(req: Request, Res: Response){

        const item_id = req.query.item_id as string;

        const removeItemService = new RemoveItemService();

        const order = await removeItemService.execute({
            item_id
        })

        return Res.json(order)
    }
}


export {RemoveItemController}