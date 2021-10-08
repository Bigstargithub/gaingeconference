const { Router } = require('express')
const router = Router()
const ctrl = require('./public.ctrl')
const is_login = require('../middleware');

router.get('/',ctrl.get_main)

router.post('/enter', ctrl.post_enter)

router.get('/watch', ctrl.get_watch)

module.exports = router;