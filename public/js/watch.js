'use strict'

const time = document.querySelector('.countdown .time')
const live = document.querySelector('.watch__live .live-link')
const today = new Date();


function isSetTimeover() {
    const openDate = new Date("2021-12-03 00:00:00")
    if(openDate > today)
    return true;
    else
    return false;

}

setInterval(() => {
    const today = new Date();
    let timeset = new Date('2021-12-03 19:00:00');

    // 기본 시간 셋팅
    const second = 1000;
    const min = second * 60;
    const hour = min * 60;
    const day = hour * 24;

    const date = timeset - today;
    if(date < 0)
    {
        date = 0;
    }

    const setDay = Math.floor(date / day)
    let setHour = Math.floor((date % day) / hour)
    let setMin = Math.floor((date % hour) / min)
    let setSec = Math.floor((date % min) / second)

    if(setHour < 10)
    {
        setHour = `0${setHour}`
    }
    if(setMin < 10)
    {
        setMin = `0${setMin}`
    }
    if(setSec < 10)
    {
        setSec = `0${setSec}`
    }

    time.textContent = `${setDay}일 ${setHour}:${setMin}:${setSec}`
},1000)



live.addEventListener('click', function() {
    
    if(isSetTimeover())
    {
        const errorOpen = document.querySelector(".error.open");
        errorOpen.style.display = 'block'
    }
    else
    {
        location.href = "/watch/live"
    }
    
})


// const closeBtns = document.querySelectorAll('.error .error__message .error__close')
// closeBtns.forEach(closeBtn => {
//   closeBtn.addEventListener('click',() => {
//     console.log(closeBtn.parentElement.parentElement);
//     closeBtn.parentElement.parentElement.parentElement.style.display = 'none'
//   })
// })