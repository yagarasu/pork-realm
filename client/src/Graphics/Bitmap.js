const getColorFromByte = byte => {
  const rmask = 0b00110000
  const gmask = 0b00001100
  const bmask = 0b00000011
  const r = (byte & rmask) >> 4
  const g = (byte & gmask) >> 2
  const b = byte & bmask
  const channelNormalizer = val => val / 0x3
  const fr = channelNormalizer(r) * 0xF
  const fg = channelNormalizer(g) * 0xF
  const fb = channelNormalizer(b) * 0xF
  const sr = fr.toString(16) + fr.toString(16)
  const sg = fg.toString(16) + fg.toString(16)
  const sb = fb.toString(16) + fb.toString(16)
  return `#${sr}${sg}${sb}`
}

class Bitmap {
  constructor(data, width, height) {
    this.data = data
    this.width = width
    this.height = height
  }

  getPixel(x, y) {
    const i = (y * this.width) + x
    return getColorFromByte(this.data[i])
  }
}

export default Bitmap
