'use strict'

const tabs = document.querySelectorAll('.play_tabs .tab');
const playlists = document.querySelectorAll('.play_lists .play_list');


tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tab.classList.add('active');
        const today = moment().format()
        const date = moment("2021-12-07 19:00:00").format()
        
        if(tab.dataset.play === 'conf' && today < date)
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
        let inputEls = document.querySelectorAll(".play_list.active input")

        const lessonNumber = document.querySelector('.watch__title .lesson_number')
        const lessonTitle = document.querySelector('.watch__title .lesson_title')

        lessonNumber.textContent = `Lesson ${inputEls[0].value}`
        lessonTitle.innerHTML = inputEls[1].value
        
        return;
    })
})