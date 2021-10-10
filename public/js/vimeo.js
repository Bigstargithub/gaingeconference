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

player.on('play', function() {
  console.log('play the video');
});