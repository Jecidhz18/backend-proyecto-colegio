import express from 'express';

import { 
    pageAvisos,
    pageHome,
    pageAdministracionIndex,
    pageAdministracionPrimerIngreso,
    pageAdministracionAsignacionClases,
    pageAdministracionAsignacionGrado,
    pageAdministracionAvisos,
    pageAdministracionCreaionCarreras,
    pageAdministracionCreacionClases,
    pageAdministracionCreacionSeccion,
    pageAdministracionCreacionUsuario,
    pageAdministracionModificarAvisos,
    pageAdministracionReingreso
} from '../../controllers/page/page.controller.js';

const router = express.Router();

router.get('/home', pageHome)

router.get('/page-avisos', pageAvisos)

router.get('/page-administracion-index', pageAdministracionIndex)

router.get('/page-administracion-primer-ingreso', pageAdministracionPrimerIngreso)

router.get('/page-administracion-asignacionclases', pageAdministracionAsignacionClases)

router.get('/page-administracion-asignaciongrado', pageAdministracionAsignacionGrado)

router.get('/page-administracion-avisos', pageAdministracionAvisos)

router.get('/page-administracion-creacioncarreras', pageAdministracionCreaionCarreras)

router.get('/page-administracion-creacionclases', pageAdministracionCreacionClases)

router.get('/page-administracion-creacionseccion', pageAdministracionCreacionSeccion)

router.get('/page-administracion-creacionusuario', pageAdministracionCreacionUsuario)

router.get('/page-administracion-modificaravisos', pageAdministracionModificarAvisos)

router.get('/page-administracion-reingreso', pageAdministracionReingreso)
export default router;