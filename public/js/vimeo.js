const playLists = document.querySelectorAll('.play__lists .playlist');

playLists.forEach(playlist => {
  playlist.addEventListener('click',function() {
    console.log('click playlist')
    callPlayer(playlist.dataset.id);
  })
})

function callPlayer(playID)
{
  return player.loadVideo(playID)
}

var options = {
  id: 616891145,
  width: 600,
  loop: false
}

var player = new Vimeo.Player('player', options)

player.on('play', function() {
  console.log('play the video');
});