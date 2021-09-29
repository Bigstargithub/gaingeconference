exports.get_main = (req, res) => {
  if(req.session.enter === 'OK')
  {
    return res.redirect('watch');
  }
  return res.render('login');
}

exports.post_enter = (req, res) => {
  const {enterCode} = req.body;

  if(enterCode === 'sample1234')
  {
    req.session.enter = 'OK'
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