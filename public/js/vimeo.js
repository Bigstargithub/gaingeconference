'use strict'

const playLists = document.querySelectorAll('.play_lists .play_list');
var options = {
  id: 616891145,
  width:1060,
  height:596,
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
