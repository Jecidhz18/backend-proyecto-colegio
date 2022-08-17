import express from 'express';

import { 
    pageAvisos,
    pageHome,
    pageAdministracionIndex
} from '../../controllers/page/page.controller.js';

const router = express.Router();

router.get('/home', pageHome)

router.get('/page-avisos', pageAvisos)

router.get('/page-administracion-index', pageAdministracionIndex)

export default router;