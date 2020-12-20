import Map from './Map'

const main = () => {
  let mainX = 0
  let mainY = 0
  let animationFrameRequest = null

  const canvas = document.createElement('canvas')
  canvas.id = 'game'
  canvas.setAttribute('width', '640')
  canvas.setAttribute('height', '400')
  const app = document.getElementById('app')
  app.appendChild(canvas)

  const canvas2 = document.createElement('canvas')
  canvas2.id = 'game2'
  canvas2.setAttribute('width', '320')
  canvas2.setAttribute('height', '200')
  app.appendChild(canvas2)

  const ctx = canvas.getContext('2d')
  const ctx2 = canvas2.getContext('2d')

  const map = new Map(Math.random() * 1024, 640, 400)
  window.map = map
  window.min = 0
  window.max = 0
  console.log(min, max)
  map.generateMap()
  map.iterate((x, y, i, tile) => {
    if (tile > window.max) window.max = tile
    if (tile < window.min) window.min = tile
    const color = Math.round(tile * 255)
    ctx.fillStyle = `rgb(${color}, ${color}, ${color})`
    ctx.fillRect(x, y, 1, 1)
  })

  const updateMain = () => {
    map.iterate((x, y, i, tile) => {
      const color = Math.round(tile * 255)
      ctx.fillStyle = `rgb(${color}, ${color}, ${color})`
      ctx.fillRect(x, y, 1, 1)
    }, mainX - 10, mainY - 10, mainX + 42, mainY + 30)
    map.iterate((x, y, i, tile, ix, iy) => {
      const color = Math.round(tile * 255)
      ctx2.fillStyle = `rgb(${color}, ${color}, ${color})`
      ctx2.fillRect(ix * 10, iy * 10, 10, 10)
    }, mainX, mainY, 32, 20)
    ctx.strokeStyle = `rgb(255,0,0)`
    ctx.strokeRect(mainX, mainY, 32, 20)
  }

  updateMain()

  document.body.addEventListener('keydown', e => {
    const { key } = e
    switch (key) {
      case "ArrowUp":
        mainY--
        break;
      case "ArrowDown":
        mainY++
        break;
      case "ArrowLeft":
        mainX--
        break;
      case "ArrowRight":
        mainX++
        break;
    }
    if (animationFrameRequest) {
      window.cancelAnimationFrame(animationFrameRequest)
    }
    animationFrameRequest = window.requestAnimationFrame(updateMain)
  })
}

main()
