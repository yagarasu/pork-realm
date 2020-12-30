import Screen from './Screen'
import Map from './Map'
import MapGenerator from './MapGenerator'
import TileSet from './TileSet'

class Game {
  constructor(canvas) {
    this.running = false
    this.canvas = canvas
    this.screen = new Screen(this.canvas)
    this.map = new Map(41 * 5, 30 * 5)
    this.mapGenerator = new MapGenerator(1000)
    this.mapGenerator.generate(this.map)
    this.tileSet = new TileSet()
  }

  start() {
    this.running = true
    this.vx = 0
    this.vy = 0
    this.vw = 41 * 2// * 5
    this.vh = 30 * 2// * 5
    document.addEventListener('keyup', e => {
      const { key } = e
      switch (key) {
        case 'ArrowRight':
          this.vx++
          break;
        case 'ArrowLeft':
          this.vx--
          break;
        case 'ArrowUp':
          this.vy--
          break;
        case 'ArrowDown':
          this.vy++
          break;
      }
      this.tick()
    })
    this.tick()
  }

  stop() {
    this.running = false
  }

  tick(ts) {
    this.screen.clean()
    let dx = 0
    let dy = 0
    for (let y = this.vy; y < (this.vh + this.vy); y++) {
      for (let x = this.vx; x < (this.vw + this.vx); x++) {
        const tile = this.map.getTile(x, y)
        this.tileSet.drawTile(this.screen, dx, dy, tile)
        // this.screen.drawTile(dx, dy, tile)
        dx++
      }
      dy++
      dx = 0
    }
  }
}

export default Game
