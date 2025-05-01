import { Router } from "express";
import { CreateItemRouter } from "./create_items.routes";
import { GetItemRouter } from "./get_item.route";
import { GetItemsRouter } from "./get_items.route";
import { UpdateItemRouter } from "./update_item.route";
import { DeleteItemRouter } from "./delete_item.route";

const router = Router();

router.use(CreateItemRouter);
router.use(GetItemsRouter);
router.use(UpdateItemRouter);
router.use(GetItemRouter);
router.use(DeleteItemRouter);

export { router as ItemsRouter };
