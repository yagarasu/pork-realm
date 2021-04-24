import Bitmap from 'Graphics/Bitmap'
import Sprite from 'Graphics/Sprite'
import TestBmp from 'assets/Test.bitmap'
import ColorBmp from 'assets/Colors.bitmap'

class MainScene {
  constructor(game) {
    this.game = game
    this.color = new Sprite(this.game.screen, new Bitmap(ColorBmp, 8, 8))
    this.sprite = new Sprite(this.game.screen, new Bitmap(TestBmp, 8, 8))
    this.game.screen.stage.addChild(this.color)
    this.game.screen.stage.addChild(this.sprite)
    this.color.x = 5
    this.color.y = 5
    this.sprite.x = 15
    this.sprite.vx = 0.001
    this.sprite.y = 5
  }
  update(delta) {
    this.sprite.x += (this.sprite.vx * delta)
    console.log('tick')
  }
}

export default MainScene
