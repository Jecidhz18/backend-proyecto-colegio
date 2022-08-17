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


export{
    pageHome,
    pageAvisos,
    pageAdministracionIndex,
    pageAdministracionPrimerIngreso
}