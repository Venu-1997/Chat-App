import { Router } from 'express';
import { getUsersForSideBar } from '../controllers/user-controller.js';
import isLoggedIn from '../middlewares/isLoggedIn.js';

const router = Router();

router.get('/', isLoggedIn , getUsersForSideBar);



export default router;