class Bitmap {
  constructor(data, width, height) {
    this.data = data
    this.width = width
    this.height = height
  }

  getPixel(x, y) {
    const i = (y * this.width) + x
    return this.data[i]
  }
}

export default Bitmap
