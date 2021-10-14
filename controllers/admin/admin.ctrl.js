const xl = require('excel4node');
const csv = require('csv-parser')
const fs = require('fs')
const model = require('../../models');

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
exports.post_sendcode = (req, res) => {
    const { phone } = req.body
    let phone_num = phone;
    phone_num = phone.replace(/-/g, '')
    model.code_list.create({
        code: phone_num
    })

    return res.send('success')
}

exports.post_excelcode = (req, res) => {
    const result = []
    fs.createReadStream('upload/test.csv')
    .pipe(csv())
    .on('data', data => {
        result.push(data)
    })
    .on('end', () => {
        result.map(phones => {
            phones[Object.keys(phones)[0]] = phones[Object.keys(phones)[0]].replace(/-/g,'')
            model.code_list.create({
                code: phones[Object.keys(phones)[0]]
            })
        })
        return res.send("<script>alert('저장되었습니다.');location.href='/admin/main'</script>")
    })
}