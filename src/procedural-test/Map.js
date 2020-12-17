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

  iterate(cb) {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const i = (y * this.width) + x
        cb(x, y, i, this.getTile(x, y))
      }
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
    const noisePointA = this.noise.perlin2(x / 2, y / 2)
    const noisePointB = this.noise.perlin2(x / 4, y / 4)
    const noisePointC = this.noise.perlin2(x / 16, y / 16)
    const noisePointD = this.noise.perlin2(x / 64, y / 64)
    return Math.abs(noisePointD)
    const noisePoint = (noisePointA * 0.25) + (noisePointB * 0.25) + (noisePointC * 0.5)
    // return Math.pow(Math.abs(noisePoint), 2.5)
  }

  generateTileSimplex(x, y) {
    const noisePoint = this.noise.simplex2(x / PERLIN_RES, y / PERLIN_RES)
    return Math.abs(noisePoint) * 255
  }

  generateTile(x, y) {
    return this.generateTilePerlin(x, y)
  }
}

export default Map
