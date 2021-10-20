'use strict'

const tabs = document.querySelectorAll('.play_tabs .tab');
const playlists = document.querySelectorAll('.play_lists .play_list');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tab.classList.add('active');
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