import Screen from 'Graphics/Screen'

class Game {
  constructor() {
    this.running = false
    this.lastTick = null
    this.ticker = null
    this.tick = this.tick.bind(this)
    this.scene = null
    this.screen = new Screen()
  }

  run() {
    console.log('> RUN')
    this.running = true
    this.ticker = window.requestAnimationFrame(this.tick)
  }

  stop() {
    console.log('> STOP')
    this.running = false
    window.cancelAnimationFrame(this.ticker)
  }

  tick(ts) {
    if (!this.scene) return
    if (!this.lastTick) this.lastTick = ts
    const delta = ts - this.lastTick
    this.scene.update(delta)
    this.screen.render(delta)
  }
}

export default Game
