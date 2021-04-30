import ImageLoader from 'Graphics/ImageLoader'
import sprite1 from 'assets/sprite1.png'
import sprite2 from 'assets/sprite2.png'

class MainScene {
  constructor(game) {
    this.game = game
    const il = new ImageLoader([
      { name: 'sprite1', src: sprite1 },
      { name: 'sprite2', src: sprite2 }
    ])
    this.images = il.load()
    console.log(this.images)
  }
  update(delta) {
    
  }
}

export default MainScene
