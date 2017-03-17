var StateMain = {

    preload: function () {

        game.load.spritesheet("melo", "images/main/robot.png", 80, 111, 28);
        game.load.image("tiles", "images/main/tiles.png");
        game.load.tilemap("map","maps/map1.json", null,Phaser.Tilemap.TILED_JSON);


    },

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //load map
        this.map=game.add.tilemap("map");
        this.map.addTilesetImage("tiles");

        this.layer=this.map.createLayer("Tile Layer 1");
        this.layer.resizeWorld();
        this.map.setCollisionBetween(0,24);


        this.melo=game.add.sprite(150,150, "melo");
        this.melo.animations.add("idle", [0,1,2,3,4,5,6,7,8,9], 12, true);
        this.melo.animations.add("walk", [10,11,12,13,14,15,16,17], 12, true);
        this.melo.animations.add("jump", [18,19,20,21,22,23,24,25], 12, false);

        this.melo.animations.play("idle");

        this.melo.anchor.set(0.5, 0.5);
        game.physics.arcade.enable(this.melo);
        this.melo.body.gravity.y = 100;
        this.melo.body.bounce.set(0.25);
        this.melo.body.collideWorldBound = true;

        game.camera.follow(this.melo);
        cursors=game.input.keyboard.createCursorKeys();

    },

    update: function () {
        game.physics.arcade.collide(this.melo, this.layer);

        if (Math.abs(this.melo.body.velocity.x) > 100)
        {
            this.melo.animations.play("walk");
        } else {
            this.melo.animations.play("idle");
        }
        if (this.melo.body.velocity.x>0)
        {
            this.melo.scale.x=1;
        }
        else
        {
            this.melo.scale.x=-1;
        }

        if (cursors.left.isDown)
        {
            this.melo.body.velocity.x=-250;
        }
        if (cursors.right.isDown)
        {
            this.melo.body.velocity.x=250;
        }
    }

}