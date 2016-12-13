var pacman = new Phaser.Game(800, 500, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    pacman.load.tilemap('fondo', 'public/Pacman.json', null, Phaser.Tilemap.TILED_JSON);
    pacman.load.image('tiles', 'public/pacManTiles.png');
}

var map;
var layer;
var p;

function create() {

    pacman.stage.backgroundColor = '#787878';

    //  The 'mario' key here is the Loader key given in game.load.tilemap
    map = pacman.add.tilemap('fondo');

    //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
    //  The second parameter maps this name to the Phaser.Cache key 'tiles'
    map.addTilesetImage('pacManTiles', 'tiles');
    
    //  Creates a layer from the World1 layer in the map data.
    //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
    layer = map.createLayer('pacman');

    //  This resizes the game world to match the layer dimensions
    layer.resizeWorld();
}

function actionOnClick () {

 
}


