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
  let isPhone = false;
  phone_text.forEach(phone => {
    phone = phone.value
    if(!isPhone && phone !== '')
    {
      isPhone = true;
    }
    axios.post('/admin/send/phone', {
      phone
    }).then(response => {
        console.log(response.data)
      if(response.data === 'success')
      {
        alert('저장되었습니다.')
        return location.href="/admin"
      }
    }).catch(err => {
      return console.error(err)
    })
  })
})

const excelFile = document.querySelector('#excel_file')
excelFile.addEventListener('change', function() {
  document.excel_form.submit();
})