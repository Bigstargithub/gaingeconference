'use strict'

// youtube
let tag = document.createElement('script')

tag.src = "https://www.youtube.com/iframe_api"
let firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

let player;
function onYouTubeIframeAPIReady(){
    player = new YT.Player('player', {
        width:'100%',
        height:'100%',
        videoId:'5Pr3BTNIVjU',
        playerVars: {
            autoplay:0,
            controls: 1,
            rel:0,
            disablekb:0,
            playsinline:1,
        }
    })
}


//playlist 클릭
const liveTitles = document.querySelector('.live__title')
const playlists = document.querySelectorAll('.live__playlist .playlist')
playlists.forEach(playlist => {
    playlist.addEventListener('click', () => {
        const inputEls = document.querySelectorAll('.playlist input');
        player.loadVideoById(inputEls[0].value)
        liveTitles.children[0].textContent = `Session ${inputEls[1].value}` // 세션번호
        liveTitles.children[1].textContent = inputEls[2].value // 세션 제목
        liveTitles.children[2].children[0].textContent = inputEls[3].value // 강사 이름
        liveTitles.children[2].children[1].textContent = inputEls[4].value

    })
})