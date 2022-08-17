import express from 'express';

import { 
    pageAvisos,
    pageHome 
} from '../../controllers/page/page.controller.js';

const router = express.Router();

router.get('/home', pageHome)

router.get('/page-avisos', pageAvisos)

export default router;