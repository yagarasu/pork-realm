const TILE_SIZE = 32

class Screen {
  constructor(canvas) {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.canvas = canvas
    this.canvas.setAttribute('width', this.width)
    this.canvas.setAttribute('height', this.height)
    this.ctx = this.canvas.getContext('2d')
    this.init()
  }

  init() {
    this.clean()
  }

  clean() {
    this.ctx.fillStyle = '#000000'
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  drawTile(x, y, tile) {
    const px = x * TILE_SIZE
    const py = y * TILE_SIZE
    const color = tile * 255
    this.ctx.fillStyle = `rgb(${color},${color},${color})`
    this.ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE)
  }
}

export default Screen
