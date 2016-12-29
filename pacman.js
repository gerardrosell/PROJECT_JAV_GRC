var pacman = new Phaser.Game(540, 528, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    pacman.load.tilemap('fondo', 'public/Pacman.json', null, Phaser.Tilemap.TILED_JSON);
    pacman.load.image('tiles', 'public/pacManTiles.png');
    pacman.load.spritesheet('cc', 'public/ChomperSprites16x16.png', 16, 16, 14*4);
}

var map;
var layer;
var p;
var player;
var posx=10;
var posy=15;

var upKey;
var downKey;
var leftKey;
var rightKey;

function create() {

    pacman.stage.backgroundColor = '#CCCCCC';
    pacman.physics.startSystem(Phaser.Physics.ARCADE);
    
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

    //afegeix sprite a la posició 0,0 amb la imatge cc
    player = pacman.add.sprite(posx*16,posy*16, 'cc');

    player.animations.add('left', [39, 38], 10, true);
    player.animations.add('right', [11,10], 10, true);
    player.animations.add('up', [53,52], 10, true);
    player.animations.add('down', [25,24], 10, true);

    pacman.physics.arcade.enable(player);

    upKey = pacman.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = pacman.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = pacman.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = pacman.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    



}

function update(){
        if (leftKey.isDown) {
            //  Move to the left
            player.body.position.x-=1;
            player.animations.play('left');
        }
        else if (rightKey.isDown)
        {
            //  Move to the right
            player.body.position.x+=1;
            player.animations.play('right');
        }
        else if (upKey.isDown)
        {
            //  Move to the right
            player.body.position.y-=1;
            player.animations.play('up');
        }
        else if (downKey.isDown)
        {
            //  Move to the right
            player.body.position.y+=1;
            player.animations.play('down');
        }
        player.set
        
}

function actionOnClick () {

 
}


