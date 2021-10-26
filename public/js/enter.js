
const enterBtn = document.querySelector('#enter_btn')
const codeBox = document.querySelector('#enter_code')

codeBox.addEventListener('focus',() => {
  codeBox.placeholder = ""
})

codeBox.addEventListener('blur', () => {
  codeBox.placeholder = "입장 코드를 입력하여 주십시오"
})
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
    return document.querySelector('.error').style.display = 'block'
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