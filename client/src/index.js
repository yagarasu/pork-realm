import Game from 'Game'

const game = new Game()
game.run()

window.game = game

setTimeout(() => {
  game.stop()
}, 20000)
