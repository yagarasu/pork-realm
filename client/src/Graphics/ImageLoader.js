class ImageLoader {
  constructor(images) {
    this.images = images
  }

  load() {
    return Promise.all(
      this.images.map(image => this.singleLoad(image))
    )
  }

  singleLoad(image) {
    return new Promise((resolve, reject) => {
      const { name, src } = image
      const img = new Image()
      img.addEventListener('load', () => {
        resolve({ name, src, img })
      })
      img.addEventListener('error', error => {
        reject({ name, src, img, error })
      })
      img.src = src
    })
  }
}

export default ImageLoader
