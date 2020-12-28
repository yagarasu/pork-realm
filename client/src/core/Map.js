class Map {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.tiles = []
    this.tiles.fill(0, 0, width * height)
  }

  getTile(x, y) {
    if (x < 0 || x >= this.width) throw new Error(`X coordinate out of bounds: ${x} - ${this.width}`)
    if (y < 0 || y >= this.height) throw new Error(`Y coordinate out of bounds: ${y} - ${this.height}`)
    const i = (y * this.width) + x
    return this.tiles[i]
  }

  setTile(x, y, tile) {
    if (x < 0 || x >= this.width) throw new Error(`X coordinate out of bounds: ${x} - ${this.width}`)
    if (y < 0 || y >= this.height) throw new Error(`Y coordinate out of bounds: ${y} - ${this.height}`)
    const i = (y * this.width) + x
    this.tiles[i] = tile
  }
}

export default Map
