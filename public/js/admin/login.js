'use strict'

function enter() {
    if(window.event.keyCode == 13)
    {
        document.querySelector('.login_btn').click()
    }
}
const loginBtn = document.querySelector('.login_btn');
loginBtn.addEventListener('click', function() {
    const login_id = document.querySelector('#login_id').value
    const login_pw = document.querySelector('#login_pw').value
    if(login_id === '' || login_pw === '')
    {
        return alert('아이디 또는 비밀번호를 확인하세요.')
    }
    else
    {
        axios.post('/admin/enter', {
            login_id,
            login_pw
        }).then(response => {
            if(response.data === 'fail')
            {
                return alert('아이디 또는 비밀번호를 확인하세요.')
            }
            else
            {
                location.href="main";
            }
        })
    }
    
})