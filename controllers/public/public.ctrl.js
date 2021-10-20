const model = require('../../models')

exports.get_main = (req, res) => {
  if(req.session.enter === 'OK')
  {
    return res.redirect('watch');
  }
  return res.render('login');
}

exports.post_enter = async (req, res) => {
  const {enterCode} = req.body;

  const count_code = await model.code_list.count({
    where: {code: enterCode}
  })

  console.log(count_code)

  if( count_code > 0 )
  {
    req.session.enter = 'OK'
    req.session.cookie.expire = new Date(Date.now()) + (60 * 10 * 1000);
    return res.send('success')
  }
  else
  {
    return res.send('failure')
  }
}

exports.get_watch = (req, res) => {
  return res.render('watch');
}

exports.update_session = (req, res) => {
  req.session.enter = 'OK'
  return res.send('Playing');
}

exports.get_watch_live = (_ , res) => {
  return res.render('live')
}