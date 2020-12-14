import Map from './Map'

const main = () => {
  const canvas = document.createElement('canvas')
  canvas.id = 'game'
  canvas.setAttribute('width', '320')
  canvas.setAttribute('height', '200')
  const app = document.getElementById('app')
  app.appendChild(canvas)

  const ctx = canvas.getContext('2d')

  const map = new Map(100, 32, 20)
  map.generateMap()
  map.iterate((x, y, i, tile) => {
    ctx.fillStyle = `rgb(${tile}, ${tile}, ${tile})`
    ctx.fillRect(x * 10, y * 10, 10, 10)
  })
}

main()
