import express from 'express';

import { 
    pageAvisos,
    pageHome,
    pageAdministracionIndex,
    pageAdministracionPrimerIngreso
} from '../../controllers/page/page.controller.js';

const router = express.Router();

router.get('/home', pageHome)

router.get('/page-avisos', pageAvisos)

router.get('/page-administracion-index', pageAdministracionIndex)

router.get('/page-administracion-primer-ingreso', pageAdministracionPrimerIngreso)

export default router;