import { Terminal as XtermTerminal } from 'xterm'

class Terminal {
  constructor(el) {
    this.currentLine = ''
    this.el = el
    this.term = null
    this.processing = false
    this.onCommand = () => {}
  }

  init() {
    this.term = new XtermTerminal({
      cursorBlink: 'block'
    })
    this.term.onKey(this.onKey.bind(this))
    this.term.open(this.el)
  }

  onKey({ key, domEvent }) {
    const { keyCode } = domEvent
    if (keyCode === 13) {
      if (this.currentLine) {
        this.term.write('\r\n')
        this.process(this.currentLine)
        this.currentLine = ''
      }
    } else if (!this.processing) {
      this.currentLine += key
      this.term.write(key)
    }
  }

  process(command) {
    this.processing = true
    this.onCommand(command, this.term)
    this.processing = false
  }
}

export default Terminal
