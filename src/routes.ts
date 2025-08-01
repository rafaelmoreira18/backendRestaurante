import {Router} from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import {CreateCategoryController} from './controllers/category/CreateCategoryController'
import {ListCategorController} from './controllers/category/ListCategoryController'

import {AddItemController} from './controllers/order/AddItemController'

import {CreateOrderController} from './controllers/order/createOrderController'
import {RemoveOrderController} from './controllers/order/RemoveOrderController'
import {isAuthenticated} from './middlewares/isAuthenticated'

import {CreateProductController} from './controllers/product/CreateProductController'
import {ListByCategoryController} from './controllers/product/ListByCategoryController'

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));


router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me',isAuthenticated, new DetailUserController().handle)

//-- category routes
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategorController().handle)

//-- Product routes
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

//-- Orders routes
router.post('/order', isAuthenticated, new CreateOrderController().handle)

router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

router.post('/order/add', isAuthenticated, new AddItemController().handle)


export{router};