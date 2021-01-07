const Phaser = require('phaser')

module.exports = {
  transparent: true,
  scene: {},
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-game',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 650,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 * 5 },
      debug: false,
    },
  },
}
