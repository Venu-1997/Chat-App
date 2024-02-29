import { Router } from 'express';
import { getMessage, sendMessage } from '../controllers/message-controller.js';
import isLoggedIn from '../middlewares/isLoggedIn.js';

const router = Router();

router.get('/:id',isLoggedIn , getMessage);
router.post('/send/:id',isLoggedIn , sendMessage);


export default router;