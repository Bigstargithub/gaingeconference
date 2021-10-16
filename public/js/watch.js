'use strict'

const tabs = document.querySelectorAll('.play_tabs .tab');
const playlists = document.querySelectorAll('.play_lists .play_list');
const time = document.querySelector('.countdown .time')

setInterval(() => {
    let today = new Date();
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



tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tab.classList.add('active');
        let today = new Date();
        if(tab.dataset.play === 'conf' && today < new Date('2021-12-03 13:00:00'))
        {
            tab.dataset.play = 'countdown'
        }

        const playlists = document.querySelector(`.${tab.dataset.play}`);
        playlists.style.display = 'flex';
        let sibling = '';

        if(tab.nextElementSibling !== null)
        {
            sibling =  tab.nextElementSibling;
        }
        else if(tab.previousElementSibling !== null)
        {
            sibling = tab.previousElementSibling;
        }
        sibling.classList.remove('active')

        const sibling_playlists = document.querySelector(`.${sibling.dataset.play}`);
        sibling_playlists.style.display = 'none';

        return tab;
    })
})

playlists.forEach(playlist => {
    playlist.addEventListener('click', function() {
        playlists.forEach(list => {
            list.classList.remove('active');
        })
        playlist.classList.add('active')
    })
})