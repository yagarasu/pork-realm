import { Noise } from 'noisejs'
import tiles from './tiles'

class MapGenerator {
  constructor(seed) {
    this.seed = seed || Math.random() * 10000
  }

  generate(map) {
    const elevationNoise = new Noise(this.seed)
    const tempNoise = new Noise(this.seed * 2)
    const lightNoise = new Noise(this.seed * 3)
    for (let y = 0; y < map.height; y++) {
      for (let x = 0; x < map.width; x++) {
        const elevation = this.generateElevation(x, y, elevationNoise, map)
        const temp = this.generateTemperature(x, y, tempNoise, map)
        const light = this.generateLight(x, y, lightNoise, map)
        const tile = this.calculateTile(elevation, temp, 1)
        map.setTile(x, y, tile)
      }
    }
  }

  calculateTile(e, t, l) {
    if (e <= 0.25) {
      if (t < 0.40) return 'ICE'
      if (t < 0.50) return 'WATER'
      return 'LAVA'
    }
    if (e <= 0.40) {
      if (t < 0.50) return 'SHALLOW_WATER'
      return 'LAVA'
    }
    if (e <= 0.50) return 'FLOOR'
    if (e <= 0.65) return 'HIGHER'
    return 'PILAR'
  }

  calculateTile_(e, t, l) {
    if (e <= 0.25) {
      if (t < 0.40) return { ...tiles.ICE, light: l }
      if (t < 0.50) return { ...tiles.WATER, light: l }
      return tiles.LAVA
    }
    if (e <= 0.40) {
      if (t < 0.50) return { ...tiles.SHALLOW_WATER, light: l }
      return tiles.LAVA
    }
    if (e <= 0.50) return { ...tiles.FLOOR, light: l }
    if (e <= 0.65) return { ...tiles.HIGHER, light: l }
    return { ...tiles.PILAR, light: l }
  }

  generateLight(x, y, noise, map) {
    const nx = x / map.width - 0.5
    const ny = y / map.height - 0.5
    let temp = (1.00 * noise.simplex2( 1 * nx,  1 * ny)
           + 0.94 * noise.simplex2( 2 * nx,  2 * ny)
           + 0.79 * noise.simplex2( 4 * nx,  4 * ny)
           + 0.53 * noise.simplex2( 8 * nx,  8 * ny)
           + 0.29 * noise.simplex2(16 * nx, 16 * ny)
           + 0.08 * noise.simplex2(32 * nx, 32 * ny))
    temp /= (1.00 + 0.94 + 0.79 + 0.53 + 0.29 + 0.08)
    temp = (temp + 1) / 2
    temp = Math.round(temp * 8) / 8
    return temp
  }

  generateTemperature(x, y, noise, map) {
    const nx = x / map.width - 0.5
    const ny = y / map.height - 0.5
    let temp = (1.00 * noise.simplex2( 1 * nx,  1 * ny)
           + 0.94 * noise.simplex2( 2 * nx,  2 * ny)
           + 0.79 * noise.simplex2( 4 * nx,  4 * ny)
           + 0.53 * noise.simplex2( 8 * nx,  8 * ny)
           + 0.29 * noise.simplex2(16 * nx, 16 * ny)
           + 0.08 * noise.simplex2(32 * nx, 32 * ny))
    temp /= (1.00 + 0.94 + 0.79 + 0.53 + 0.29 + 0.08)
    temp = (temp + 1) / 2
    temp = Math.round(temp * 8) / 8
    return temp
  }

  generateElevation(x, y, noise, map) {
    const nx = x / map.width - 0.5
    const ny = y / map.height - 0.5
    let e = (1.00 * noise.simplex2( 1 * nx,  1 * ny)
           + 0.50 * noise.simplex2( 2 * nx,  2 * ny)
           + 0.25 * noise.simplex2( 4 * nx,  4 * ny)
           + 0.13 * noise.simplex2( 8 * nx,  8 * ny)
           + 0.06 * noise.simplex2(16 * nx, 16 * ny)
           + 0.03 * noise.simplex2(32 * nx, 32 * ny))
    e /= (1.00 + 0.50 + 0.25 + 0.13 + 0.06 + 0.03)
    e = (e + 1) / 2
    e = Math.round(e * 8) / 8
    return e
  }
}

export default MapGenerator
