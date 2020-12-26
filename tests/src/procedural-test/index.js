import Map from './Map'

const main = () => {
  const canvas = document.createElement('canvas')
  canvas.id = 'game'
  canvas.setAttribute('width', '640')
  canvas.setAttribute('height', '400')
  const app = document.getElementById('app')
  app.appendChild(canvas)

  const ctx = canvas.getContext('2d')

  const map = new Map(Math.random() * 1024, 640, 400)
  map.generateMap()
  map.iterate((x, y, i, tile) => {
    ctx.fillStyle = `rgb(${tile}, ${tile}, ${tile})`
    ctx.fillRect(x * 1, y * 1, 1, 1)
  })
}

main()
