import Bitmap from 'Graphics/Bitmap'
import Sprite from 'Graphics/Sprite'
import TestBmp from 'assets/Test.bitmap'

class MainScene {
  constructor(game) {
    this.game = game
    this.test = new Sprite(this.game.screen, new Bitmap(TestBmp, 8, 8))
    console.log('>>>', this.game)
    this.game.screen.stage.addChild(this.test)
  }
  update(delta) {

  }
}

export default MainScene
