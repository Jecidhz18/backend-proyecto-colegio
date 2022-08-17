const pageHome = (req, res) => {
    res.render('page/home',{

    })
}

const pageAvisos = (req, res) => {
    res.render('page/page-avisos',{

    })
}

const pageAdministracionIndex = (req, res) => {
    res.render('page/page-administracion-index',{

    })
}

const pageAdministracionPrimerIngreso = (req, res) => {
    res.render('page/page-administracion-primer-ingreso',{

    })
}

const pageAdministracionAsignacionClases = (req, res) => {
    res.render('page/page-administracion-asignacionclases',{

    })
}

const pageAdministracionAsignacionGrado = (req, res) => {
    res.render('page/page-administracion-asignaciongrado',{

    })
}
// 
const pageAdministracionAvisos = (req, res) => {
    res.render('page/page-administracion-avisos',{

    })
}

const pageAdministracionCreaionCarreras = (req, res) => {
    res.render('page/page-administracion-creacioncarreras',{

    })
}

const pageAdministracionCreacionClases = (req, res) => {
    res.render('page/page-administracion-creacionclases',{

    })
}

const pageAdministracionCreacionSeccion = (req, res) => {
    res.render('page/page-administracion-creacionseccion',{

    })
}

const pageAdministracionCreacionUsuario = (req, res) => {
    res.render('page/page-administracion-creacionusuario',{

    })
}

const pageAdministracionModificarAvisos = (req, res) => {
    res.render('page/page-administracion-modificaravisos',{

    })
}

const pageAdministracionReingreso = (req, res) => {
    res.render('page/page-administracion-reingreso',{

    })
}



export{
    pageHome,
    pageAvisos,
    pageAdministracionIndex,
    pageAdministracionPrimerIngreso,
    pageAdministracionAsignacionClases,
    pageAdministracionAsignacionGrado,
    pageAdministracionAvisos,
    pageAdministracionCreaionCarreras,
    pageAdministracionCreacionClases,
    pageAdministracionCreacionUsuario,
    pageAdministracionReingreso,
    pageAdministracionModificarAvisos,
    pageAdministracionCreacionSeccion
}