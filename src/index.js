import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'

let currentLine = ''

const term = new Terminal({
  cursorBlink: 'block'
})
term.open(document.getElementById('app'))
term.onKey(({ key, keyCode }) => {
  if (keyCode === 13) {
    if (currentLine) {
      term.write('\r\n')
      currentLine = ''
    }
  } else {
    currentLine += key
    term.write(key)
  }
})

term.onData((...args) => {
  console.log('data', args)
})

window.term = term
