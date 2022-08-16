import express from 'express';

import { 
    pageHome 
} from '../../controllers/page/page.controller.js';

const router = express.Router();

router.get('/home', pageHome)

export default router;