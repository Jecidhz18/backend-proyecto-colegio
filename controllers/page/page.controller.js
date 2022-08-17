const pageHome = (req, res) => {
    res.render('page/home',{

    })
}

const pageAvisos = (req, res) => {
    res.render('page/page-avisos',{

    })
}

export{
    pageHome,
    pageAvisos
}