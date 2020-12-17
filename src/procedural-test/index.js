import Map from './Map'

const main = () => {
  const canvas = document.createElement('canvas')
  canvas.id = 'game'
  canvas.setAttribute('width', '320')
  canvas.setAttribute('height', '200')
  const app = document.getElementById('app')
  app.appendChild(canvas)

  const ctx = canvas.getContext('2d')

  const map = new Map(Math.random() * 1024, 320, 200)
  window.map = map
  map.generateMap()
  map.iterate((x, y, i, tile) => {
    const color = Math.round((255 / 5) * tile) * 5
    ctx.fillStyle = `rgb(${color}, ${color}, ${color})`
    ctx.fillRect(x * 10, y * 10, 10, 10)
  })
}

main()
