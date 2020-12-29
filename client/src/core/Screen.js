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

  createGradient(colorA, colorB) {
    const [ar,ag,ab] = colorA
    const [br,bg,bb] = colorB
    const g = (v, min, max) => ((max - min) * v) + min
    return v => {
      const fr = g(v, ar, br)
      const fg = g(v, ag, bg)
      const fb = g(v, ab, bb)
      return [fr, fg, fb]
    }
  }

  drawTile(x, y, tile) {
    const px = x * TILE_SIZE
    const py = y * TILE_SIZE
    const [r,g,b] = tile.color
    const l = tile.light
    this.ctx.fillStyle = `rgb(${r},${g},${b},${l})`
    this.ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE)
    // const colorT = gradientT(tile)
    // const colorE = gradientE(tile)
    // const [tr,tg,tb] = colorT
    // const [er,eg,eb] = colorE
    // this.ctx.fillStyle = `rgb(${er},${eg},${eb})`
    // this.ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE)
    // this.ctx.fillStyle = `rgba(${tr},${tg},${tb},1)`
    // this.ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE)
  }
}

export default Screen
