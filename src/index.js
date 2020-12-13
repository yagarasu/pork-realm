import 'xterm/css/xterm.css'
import Terminal from './Terminal'
import Parser from './Terminal/Parser'

const term = new Terminal(document.getElementById('app'))
const parser = new Parser()
term.onCommand = parser.parse
window.term = term

document.addEventListener('DOMContentLoaded', () => {
  term.init()
})
