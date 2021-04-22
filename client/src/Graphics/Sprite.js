class Sprite {
  constructor(screen, image) {
    this.screen = screen
    this.image = image
    this.x = 0
    this.y = 0
    this.width = image.width
    this.height = image.height
  }

  render(delta) {
    const ctx = this.screen.context
    ctx.save()
    ctx.translate(...this.screen.globalToLocalCoord(this.x, this.y))
    for (let y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        this.screen.plot(x, y, this.image.getPixel(x, y))
        console.log('>>', x, y, this.image.getPixel(x, y))
      }
    }
    ctx.restore()
  }
}

export default Sprite
