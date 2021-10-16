
const enterBtn = document.querySelector('#enter_btn')
const codeBox = document.querySelector('#enter_code')

codeBox.addEventListener('keydown', function(e){
  if(e.keyCode === 13)
  {
    enterBtn.click();
  }
})

enterBtn.addEventListener('click', function() {
  const enterCode = codeBox.value;
  if(enterCode === '')
  {
    alert('입장 코드가 틀립니다.\n입장 코드가 분실하신 경우\n010-4599-5464로 연락주시기 바랍니다.');
    return false;
  }
  else
  {
    axios.post('/enter',{
      enterCode,
    })
    .then(response => {
      if(response.data === 'success')
      {
        return window.location.href = "/watch"
      }
      else
      {
        return document.querySelector('.error').style.display = 'block'
      }
    })
    .catch(err => {
      console.error(err)
    })
  }
})

const clostBtn = document.querySelector('.error__message .error__close')
clostBtn.addEventListener('click', function() {
  document.querySelector('.error').style.display = 'none';

})