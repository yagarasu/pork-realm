import tiles from '../tiles/custom.png'

const TILE_WIDTH = 16
const TILE_HEIGHT = 16
const TILES_CAVE = {
  WATER: [1,1],
  ICE: [5,1],
  LAVA: [1,4],
  SHALLOW_WATER: [1,22],
  FLOOR: [9,1],
  HIGHER: [9,13],
  PILAR: [21,8]
}
const TILES = {
  WATER: [1,0],
  ICE: [3,0],
  LAVA: [4,0],
  SHALLOW_WATER: [2,0],
  FLOOR: [0,0],
  HIGHER: [0,1],
  PILAR: [0,2]
}

class TileSet {
  constructor() {
    this.image = new Image()
    this.image.src = tiles
  }

  getCoordinates(tileName) {
    return TILES[tileName]
  }

  drawTile(screen, x, y, tileName) {
    const ctx = screen.ctx
    const [tx, ty] = this.getCoordinates(tileName)
    const sx = tx * TILE_WIDTH
    const sy = ty * TILE_HEIGHT
    ctx.drawImage(this.image, sx, sy, TILE_WIDTH, TILE_HEIGHT, x * TILE_WIDTH * 2, y * TILE_HEIGHT * 2, TILE_WIDTH * 2, TILE_HEIGHT * 2)
  }
}

export default TileSet
