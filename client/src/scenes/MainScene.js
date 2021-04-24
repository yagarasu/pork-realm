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
    this.sprite.vx = 1
    this.sprite.vy = 1
    this.sprite.y = 5
  }
  update(delta) {
    const nextX = this.sprite.x + (this.sprite.vx * delta)
    const nextY = this.sprite.y + (this.sprite.vy * delta)
    if (nextX <= 0) {
      this.sprite.vx *= -1
      this.sprite.x = 0
    } else if (nextX + this.sprite.width >= this.game.screen.width) {
      this.sprite.vx *= -1
      this.sprite.x = this.game.screen.width - this.sprite.width
    } else {
      this.sprite.x = nextX
    }
    if (nextY <= 0) {
      this.sprite.vy *= -1
      this.sprite.y = 0
    } else if (nextY + this.sprite.height >= this.game.screen.height) {
      this.sprite.vy *= -1
      this.sprite.y = this.game.screen.height - this.sprite.height
    } else {
      this.sprite.y = nextY
    }
  }
}

export default MainScene
