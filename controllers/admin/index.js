const { Router } = require('express')
const router = Router()
const ctrl = require('./admin.ctrl')
const multer = require('multer')

let storage = multer.diskStorage({
  destination: function(req,file, cb)
  {
    cb(null, 'upload/')
  },
  filename: function(req, file, cb)
  {
    cb(null, file.originalname)
  },
})

let upload = multer({ storage: storage})

router.get('/', ctrl.get_login)

router.post('/enter', ctrl.post_enter)

router.get('/main', ctrl.get_main)

router.put('/main', ctrl.put_main)

// router.get('/code/list', ctrl.get_codelist)

router.get('/code/reg',ctrl.get_regcode)

router.post('/code/reg', ctrl.post_sendcode)

router.post('/reg/excel', upload.single('excel_file'), ctrl.post_excelcode)

module.exports = router