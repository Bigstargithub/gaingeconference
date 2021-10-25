const is_login = (req, res, next) => {
  if(req.session.enter === 'OK')
  {
    return next()
  }
  else
  {
    return res.send(`<script>alert("입장 시간이 만료되었습니다. 입장코드를 다시 입력하시기 바랍니다.");location.href="/";</script>`)
  }
}

module.exports = is_login