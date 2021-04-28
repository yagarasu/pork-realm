function App(jQuery) {
  this.jQuery = jQuery;
  this.width = 0;
  this.height = 0;
  this.data = [];
}

App.prototype.init = function() {
  this.$workspace = $('#workspace');
  this.$colors = $('#colors');
  this.getAllColors().forEach(color => {
    const $newColor = $('<button class="color"></button>').css('background-color', color);
    this.$colors.append($newColor);
  })
}

App.prototype.newSprite = function () {
  this.width = 8;
  this.height = 8;
  this.data.fill(0, 0, 64);
  this.redraw();
}

App.prototype.redraw = function () {
  const rows = [];
  for (var i = 0; i < this.height; i++) {
    rows.push('<tr>');
    const cells = Array(this.width).fill('<td><button class="pixel"></button></td>').join('')
    rows.push(cells);
    rows.push('</tr>');
  }
  this.$workspace.html('<table><tbody>' + rows.join('') + '</tbody></table>');
}

App.prototype.getColorFromByte = function(byte) {
  const rmask = 0b00110000
  const gmask = 0b00001100
  const bmask = 0b00000011
  const r = (byte & rmask) >> 4
  const g = (byte & gmask) >> 2
  const b = byte & bmask
  const channelNormalizer = val => val / 0x3
  const fr = channelNormalizer(r) * 0xF
  const fg = channelNormalizer(g) * 0xF
  const fb = channelNormalizer(b) * 0xF
  const sr = fr.toString(16) + fr.toString(16)
  const sg = fg.toString(16) + fg.toString(16)
  const sb = fb.toString(16) + fb.toString(16)
  return `#${sr}${sg}${sb}`
}

App.prototype.getAllColors = function () {
  const colors = [];
  for (var i = 0; i < 64; i++) {
    colors.push(this.getColorFromByte(i));
  }
  return colors;
}

window.app = new App(jQuery);
