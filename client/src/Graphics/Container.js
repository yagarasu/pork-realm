class Container {
  constructor(screen) {
    this.screen = screen
    this.children = []
  }

  render(delta) {
    this.children.forEach(child => {
      child.render(delta)
    })
  }

  addChild(child) {
    this.children.push(child)
  }

  reset() {
    this.children = []
  }
}

export default Container
