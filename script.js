function loadBigFoot() {
  document.getElementById ('bigFoot').src = 'bigfoot.png'
}

function gameDescription() {
  alert("About the Game: \n\nBigFoot is a little creature, lost in his habitat. He has a big problem; he gets lost very easily. All we want to do is to find him. Click on BigFoot when you find him and you will be notified if you did. \n\nHint: BigFoot will get lost each time you find him, until you can no longer find him, which means you couldn't save him eventually. \n\n😜You win till you loose")
}

function moveBigFoot() {
  alert('Woohoo, you win! You found Bigfoot!')
  var picture = document.getElementById('bigFoot')

  var x = Math.random() * 1000
  var y = Math.random() * 1000

  picture.style.left = x + 'px'
  picture.style.top = y + 'px'
}
