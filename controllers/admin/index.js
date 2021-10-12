const { Router } = require('express')
const router = Router()
const ctrl = require('./admin.ctrl')

router.get('/', ctrl.get_login)

router.post('/enter', ctrl.post_enter)

router.get('/main', ctrl.get_main)

router.get('/code/list', ctrl.get_codelist)

router.get('/code/reg',ctrl.get_regcode)

module.exports = router