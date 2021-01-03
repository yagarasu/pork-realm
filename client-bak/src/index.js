import './style.css'
import Game from './core/Game'

const game = new Game(document.getElementById('game'))
window.game = game

game.start()
