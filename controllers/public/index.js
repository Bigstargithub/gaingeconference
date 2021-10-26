const { Router } = require('express')
const router = Router()
const ctrl = require('./public.ctrl')
const is_login = require('../middleware');

router.get('/',ctrl.get_main)

router.post('/enter', ctrl.post_enter)

router.get('/watch', is_login,ctrl.get_watch)

router.put('/watch',ctrl.update_session)

router.get('/watch/live', ctrl.get_watch_live)

module.exports = router;