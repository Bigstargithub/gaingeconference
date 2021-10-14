'use strict'

const addBtn = document.querySelector('.reg__btns .add_btn');
addBtn.addEventListener('click', function(){
  const phone_text = document.createElement('input')
  phone_text.type="text"
  phone_text.name="phone"
  phone_text.className="textbox"

  const tableTd = document.querySelector('.phone__textbox')
  tableTd.appendChild(phone_text);

  return;
})

const submitBtn = document.querySelector('.reg__btns .submit_btn')
submitBtn.addEventListener('click', function() {
  const phone_text = document.querySelectorAll('.phone__textbox .textbox')
  const isPhone = false;
  phone_text.forEach(phone => {
    if(!isPhone && phone.textContent != '')
    {
      isPhone = true;
    }
    axios.post('/admin/send/phone', {
      phone
    }).then(response => {
      return console.log(response.data);
    }).catch(err => {
      return console.error(err)
    })
  })
  if(isPhone)
  {
    alert('저장되었습니다.')
    return location.href="/admin"
  }
  else
  {
    return alert('전화번호를 입력하세요.')
  }
})

const excelFile = document.querySelector('#excel_file')
excelFile.addEventListener('change', function() {
  document.excel_form.submit();
})