'use strict'

const time = document.querySelector('.countdown .time')
const live = document.querySelector('.watch__live .live-link')


function isSetTimeover() {
    const today = moment()
    const openDate = moment("2021-12-04 00:00:00")
    if(openDate > today)
    return true;
    else
    return false;

}

setInterval(() => {
    const today = moment()
    const timeset = moment("2021-12-07 19:00:00")

    // 기본 시간 셋팅
    const second = 1000;
    const min = second * 60;
    const hour = min * 60;
    const day = hour * 24;

    const setDay = Math.floor(moment.duration(timeset.diff(today)).asDays())
    let setHour = Math.floor(moment.duration(timeset.diff(today)).asHours() % 24)
    let setMin = Math.floor(moment.duration(timeset.diff(today)).asMinutes() % 60)
    let setSec = Math.floor(((moment.duration(timeset.diff(today)).asMilliseconds()) / 1000) % 60)

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