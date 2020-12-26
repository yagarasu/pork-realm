import { Noise } from 'noisejs'

class Map {
  constructor(seed, width, height) {
    this.seed = seed
    this.noise = new Noise(this.seed)

    this.width = width
    this.height = height
    this.tiles = []
    this.tiles.fill(0, 0, width * height)
  }

  getTile(x, y) {
    const i = (y * this.width) + x
    return this.tiles[i]
  }

  setTile(x, y, tile) {
    const i = (y * this.width) + x
    this.tiles[i] = tile
  }

  iterate(cb, dx, dy, w, h) {
    const x1 = dx || 0
    const x2 = w ? dx + w : this.width
    const y1 = dy || 0
    const y2 = h ? dy + h : this.height
    let ix = 0
    let iy = 0
    for (let y = y1; y < y2; y++) {
      for (let x = x1; x < x2; x++) {
        const i = (y * this.width) + x
        cb(x, y, i, this.getTile(x, y), ix, iy)
        ix++
      }
      iy++
      ix = 0
    }
  }

  generateMap() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const i = (y * this.width) + x
        this.tiles[i] = this.generateTile(x, y)
      }
    }
  }

  generateTileRandom(x, y) {
    return Math.random()
    // return Math.round(Math.random() * 255)
  }

  generateTilePerlin(x, y) {
    const noisePointA = (this.noise.perlin2(x / 2, y / 2) + 1) / 2
    const noisePointB = (this.noise.perlin2(x / 4, y / 4) + 1) / 2
    const noisePointC = (this.noise.perlin2(x / 16, y / 16) + 1) / 2
    const noisePointD = Math.pow((this.noise.perlin2(x / 32, y / 32) + 1) / 2, 3)
    // return noisePointD
    const noisePoint = (noisePointA * 0.05) + (noisePointB * 0.1) + (noisePointC * 0.15) + (noisePointD * 0.7)
    return noisePoint
  }

  generateTileSimplex(x, y) {
    const noisePoint = this.noise.simplex2(x / PERLIN_RES, y / PERLIN_RES)
    return Math.abs(noisePoint) * 255
  }

  generateTile(x, y) {
    const base = this.generateTilePerlin(x, y)
    const elevation = base // Math.pow(base, 4)
    if (elevation < 0.25) return 0
    if (elevation >= 0.25 && elevation < 0.45) return 0.5
    return 1
    // if (elevation >= 0.45 && elevation < 0.9) return 0.9
    // return elevation
  }
}

export default Map
