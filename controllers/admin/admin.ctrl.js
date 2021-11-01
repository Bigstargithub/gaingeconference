const xl = require('excel4node');
const csv = require('csv-parser')
const fs = require('fs')
const model = require('../../models');
const { Op, INTEGER } = require('sequelize')

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

exports.get_main = async ( req , res) => {
    let code_list
    let code_count
    let last_page
    let page = 1
    const code = req.query.code

    if(req.query.page !== undefined)
    {
        page = Number(req.query.page)
    }
    
    let paging = Math.floor((page-1) / 5) * 5 + 1
    console.log(paging)

    if(req.query.code !== undefined)
    {
        code_list = await model.code_list.findAll({
            where:{
                [Op.or] : [{ name : {[Op.like]: "%"+req.query.code+"%"}} , {code : {[Op.like] : "%"+req.query.code+"%"}}]
            },
            order : [
                ['name', 'ASC']
            ],
            offset: (page-1) * 20,
            limit: 20,
        })
        code_count = await model.code_list.count({
            where:{
                [Op.or] : [{ name : {[Op.like]: "%"+req.query.code+"%"}} , {code : {[Op.like] : "%"+req.query.code+"%"}}]
            }
        })
        last_page = Math.floor(code_count / 20) + 1
        if(Math.floor(code_count / 20) > 5 + Math.floor(paging/5)*5)
        {
            code_count = 5 + Math.floor(paging/5)*5
        }
        else
        {
            code_count = Math.floor(code_count / 20) + 1
        }
    }
    else
    {
        code_list = await model.code_list.findAll({
            order : [
                ['name', 'ASC']
            ],
            offset: (page-1) * 20,
            limit: 20,
        })
        code_count = await model.code_list.count({

        })
        last_page = Math.floor(code_count / 20) + 1
        if(Math.floor(code_count / 20) > 5 + Math.floor(paging/5)*5)
        {
            code_count = 5 + Math.floor(paging/5)*5
        }
        else
        {
            code_count = Math.floor(code_count / 20) + 1
        }
    }
    
    return res.render('admin/main',{
        code_list,
        page,
        code_count,
        paging,
        last_page,
        code
    })
}

exports.put_main = async (req, res) => {
    let code_list;
}

// exports.get_codelist = (req, res) => {

// }

exports.get_regcode = (req, res) => {
    return res.render('admin/reg_code')
}
exports.post_sendcode = async (req, res) => {
    const { nameArr, phoneArr } = req.body
    for(let i = 0; i<nameArr.length; i++)
    {
        await model.code_list.create({
            name: nameArr[i],
            code: phoneArr[i]
        })
    }
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
            phones[Object.keys(phones)[1]] = phones[Object.keys(phones)[1]].replace(/-/g,'')
            model.code_list.create({
                name: phones[Object.keys(phones)[0]],
                code: phones[Object.keys(phones)[1]]
            })
        })
        return res.send("<script>alert('저장되었습니다.');location.href='/admin/main'</script>")
    })
}