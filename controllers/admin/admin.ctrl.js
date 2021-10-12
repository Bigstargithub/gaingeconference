exports.get_login = (req, res) => {
    if(req.session.admin_enter === 'OK')
    {
        console.log(req.session.admin_enter);
        return res.redirect('/admin/main')
    }
    else
    {
        return res.render('admin/login')
    }
}

exports.post_enter = (req, res) => {
    const { login_id, login_pw } = req.body
    if(login_id === process.env.admin_id && login_pw === process.env.admin_pw)
    {
        req.session.admin_enter = 'OK'
        res.send('success')
    }
    else
    {
        res.send('fail')
    }
}

exports.get_main = ( _ , res) => {
    return res.render('admin/main')
}

exports.get_codelist = (req, res) => {

}

exports.get_regcode = (req, res) => {
    return res.render('admin/reg_code')
}