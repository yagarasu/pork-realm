import Container from 'Graphics/Container'

export const SCREEN_WIDTH = 720
export const SCREEN_HEIGHT = 420
export const PIXEL_SIZE = 4

class Screen {
  constructor() {
    this.createCanvas()
    this.clear()
    this.stage = new Container(this)
  }

  createCanvas() {
    this.canvas = document.createElement('CANVAS')
    this.context = this.canvas.getContext('2d')
    this.canvas.setAttribute('width', SCREEN_WIDTH)
    this.canvas.setAttribute('height', SCREEN_HEIGHT)
    document.body.appendChild(this.canvas)
  }

  clear() {
    const ctx = this.context
    ctx.fillStyle = '#000000'
    ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)
    ctx.fill()
  }

  plot(x, y, color) {
    const ctx = this.context
    ctx.fillStyle = color
    ctx.rect(x, y, PIXEL_SIZE, PIXEL_SIZE)
    ctx.fill()
  }

  render(delta) {
    this.stage.render(delta)
  }
}

export default Screen
