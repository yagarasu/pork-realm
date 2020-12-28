import { Noise } from 'noisejs'

class MapGenerator {
  constructor(seed) {
    this.seed = seed || Math.random() * 10000
    this.noise = new Noise(this.seed)
  }

  generate(map) {
    for (let y = 0; y < map.height; y++) {
      for (let x = 0; x < map.width; x++) {
        const tile = this.generateTile(x, y)
        map.setTile(x, y, tile)
      }
    }
  }

  generateTile(x, y) {
    const base = this.generateTilePerlin(x, y)
    const elevation = base // Math.pow(base, 4)
    if (elevation < 0.08) return 0
    if (elevation >= 0.08 && elevation < 0.25) return 0.5
    return 1
  }

  generateTilePerlin(x, y) {
    const noisePointA = (this.noise.perlin2(x / 2, y / 2) + 1) / 2
    const noisePointB = (this.noise.perlin2(x / 4, y / 4) + 1) / 2
    const noisePointC = Math.pow((this.noise.perlin2(x / 16, y / 16) + 1) / 2, 8)
    const noisePointD = Math.pow((this.noise.perlin2(x / 32, y / 32) + 1) / 2, 5)
    const noisePoint = (noisePointA * 0.05) + (noisePointB * 0.1) + (noisePointC * 0.15) + (noisePointD * 0.75)
    return noisePoint
  }
}

export default MapGenerator
