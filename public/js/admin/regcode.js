'use strict'

const addBtn = document.querySelector('.reg__btns .add_btn');
addBtn.addEventListener('click', function(){
  const divForm = document.createElement('div')
  divForm.className = "phone__textbox";
  
  const phone_text = document.createElement('input')
  phone_text.type="text"
  phone_text.name="phone"
  phone_text.className="textbox_phone"

  const nameText = document.createElement('input')
  nameText.type="text"
  nameText.name="name"
  nameText.className = "textbox_name"

  divForm.appendChild(nameText)
  divForm.appendChild(phone_text)

  const regPhone = document.querySelector('.reg__phone')
  regPhone.appendChild(divForm)

  return;
})

const submitBtn = document.querySelector('.reg__btns .submit_btn')
submitBtn.addEventListener('click', function() {
  let isNull = true;
  let result = false;
  let nameArr = []
  let phoneArr = []

  const phoneTextboxs = document.querySelectorAll('.phone__textbox')
  phoneTextboxs.forEach(phoneText => {  
    isNull = true  
    const Textboxs = phoneText.childNodes
    Textboxs.forEach(text => {
      if(text.value === undefined)
      {
        text.remove()
      }
    })

    const name = Textboxs[0].value
    const phone = Textboxs[1].value

    if(isNull && phone !== '' && name !== '')
    {
      isNull = false
      nameArr.push(name)
      phoneArr.push(phone)
    }
    if(isNull)
    {
      return alert('이름 또는 전화번호를 입력하세요.')
    }
  })

  axios.post('/admin/code/reg',{
    nameArr,
    phoneArr
  }).then(response => {
    if(response.data === 'success')
    {
      alert('저장되었습니다.')
      return location.href = "/admin/main"
    }
  })
  .catch(err => {
    console.log(err)
  })
})

const excelFile = document.querySelector('#excel_file')
excelFile.addEventListener('change', function() {
  document.excel_form.submit();
})