'use strict'

const playLists = document.querySelectorAll('.play_lists .play_list');
let widthVideo = 1060;
let heightVideo = 596;
if(window.innerWidth < 1060)
{
  widthVideo = window.innerWidth;
}
if(window.innerWidth < 757)
{
  heightVideo = 440;
}
const play = document.querySelector('.watch__player #player iframe')
console.log(play);
var options = {
  id: 616891145,
  width:widthVideo,
  height: heightVideo,
  loop: false
}
var player = new Vimeo.Player('player', options)

playLists.forEach(playlist => {
  playlist.addEventListener('click',function() {
    callPlayer(playlist.dataset.id);
  })
})

function callPlayer(playID)
{
  return player.loadVideo(playID)
}
let interval = '';
player.on('play', function() {
  interval = setInterval(() => {
    axios.post('/update/session', {

    }).then(response => {
        return console.log(response.data)
    }).catch(err => {
        return console.error(err)
    });

    
player.getPaused().then(function(paused) {
  if(paused) 
  {
    console.log('hihi')
    clearInterval(interval)
  }
})
}, 5000)
});
