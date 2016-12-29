var pacman = new Phaser.Game(540, 528, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update/*, render:render*/ });

function preload() {

    pacman.load.tilemap('fondo', 'public/Pacman2.json', null, Phaser.Tilemap.TILED_JSON);
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
    
    
    //  The 'mario' key here is the Loader key given in game.load.tilemap
    map = pacman.add.tilemap('fondo');

    //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
    //  The second parameter maps this name to the Phaser.Cache key 'tiles'
    map.addTilesetImage('pacManTiles', 'tiles');
    map.setCollisionBetween(1,420);
    
    //  Creates a layer from the World1 layer in the map data.
    //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
    layer = map.createLayer('pacman');

    //  This resizes the game world to match the layer dimensions
    layer.resizeWorld();
    pacman.physics.startSystem(Phaser.Physics.ARCADE);

    //afegeix sprite a la posició 0,0 amb la imatge cc
    player = pacman.add.sprite(posx*16,posy*16, 'cc');

    pacman.physics.arcade.enable(player);

    //  ajusta la mida de colisió del player a 16x16
    player.body.setSize(16, 16, 0, 0);

    player.animations.add('left', [39, 38], 10, true);
    player.animations.add('right', [11,10], 10, true);
    player.animations.add('up', [53,52], 10, true);
    player.animations.add('down', [25,24], 10, true);


    upKey = pacman.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = pacman.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = pacman.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = pacman.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    
}

function update(){
    pacman.physics.arcade.collide(player, layer);

    //player.body.velocity.x = 0;
    //player.body.velocity.y = 0;
        if (leftKey.isDown) {
            //  Move to the left
            player.body.velocity.y = 0;
            player.body.velocity.x = -100;
            player.animations.play('left');
        }
        else if (rightKey.isDown)
        {
            //  Move to the right
            player.body.velocity.y = 0;
            player.body.velocity.x = 100;
            player.animations.play('right');
        }
        else if (upKey.isDown)
        {
            //  Move to the right
            player.body.velocity.x = 0;
            player.body.velocity.y = -100;
            player.animations.play('up');
        }
        else if (downKey.isDown)
        {
            //  Move to the right
            player.body.velocity.x = 0;
            player.body.velocity.y = 100;
            player.animations.play('down');
        }
        player.set
        
}

/*function render() {

    pacman.debug.body(player);

}*/

