const loginBtn = document.querySelector('.btn');
const CodeEl = document.querySelector('.code-textbox .textbox');

loginBtn.addEventListener('click', function() {
  if(CodeEl.textContent.length < 8 || CodeEl.textContent !== 'example1')
  {
    alert('입장코드가 틀립니다. \n\n 입장코드를 분실할 경우\n 010-4599-5464로 연락주시기 바랍니다.');
    return false;
  }
  else
  {
    window.location.href="/video";
  }
});

CodeEl.addEventListener('keydown',function(e) {
  console.log(e.keyCode);
})