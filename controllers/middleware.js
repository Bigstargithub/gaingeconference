const is_login = (req, res, next) => {
  if(req.session.enter === 'OK')
  {
    return next()
  }
  else
  {
    return res.send('<script>alert("입장코드를 입력하세요");location.href="/";</script>')
  }
}

module.exports = is_login