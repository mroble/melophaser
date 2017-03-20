var StateMain = {

    preload: function () {

        game.load.spritesheet("melo", "images/main/robot.png", 80, 111, 28);
        game.load.image("tiles", "images/main/tiles.png");
        game.load.tilemap("map","maps/map1.json", null,Phaser.Tilemap.TILED_JSON);
        game.load.spritesheet("arrow", "images/arrowButtons.png", 60, 60, 4);
        game.load.spritesheet("monster", "images/main/monsters.png",50,50,2);


    },

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.meloSize=.5;

        //load map
        this.map=game.add.tilemap("map");
        this.map.addTilesetImage("tiles");

        this.layer=this.map.createLayer("Tile Layer 1");
        this.layer.resizeWorld();
        this.map.setCollisionBetween(0,24);

        this.upArrow=game.add.sprite(0,0,"arrow");
        this.downArrow=game.add.sprite(0,50,"arrow");
        this.leftArrow=game.add.sprite(-50,25,"arrow");
        this.rightArrow=game.add.sprite(50,25,"arrow");

        this.upArrow.inputEnabled=true;
        this.downArrow.inputEnabled=true;
        this.leftArrow.inputEnabled=true;
        this.rightArrow.inputEnabled=true;

        this.upArrow.events.onInputDown.add(this.doJump,this);
        this.downArrow.events.onInputDown.add(this.doStop,this);
        this.leftArrow.events.onInputDown.add(this.goLeft,this);
        this.rightArrow.events.onInputDown.add(this.goRight,this);

        this.upArrow.frame = 0;
        this.downArrow.frame = 1;
        this.leftArrow.frame = 2;
        this.rightArrow.frame = 3;

        this.upArrow.anchor.set(0.5,0.5);
        this.downArrow.anchor.set(0.5,0.5);
        this.leftArrow.anchor.set(0.5,0.5);
        this.rightArrow.anchor.set(0.5,0.5);

        this.buttonGroup = game.add.group();
        this.buttonGroup.add(this.upArrow);
        this.buttonGroup.add(this.downArrow);
        this.buttonGroup.add(this.leftArrow);
        this.buttonGroup.add(this.rightArrow);

        this.buttonGroup.fixedToCamera=true;
        this.buttonGroup.cameraOffset.setTo(game.width-this.buttonGroup.width/2,game.height-this.buttonGroup.height);


        this.melo=game.add.sprite(150,150, "melo");
        this.melo.animations.add("idle", [0,1,2,3,4,5,6,7,8,9], 12, true);
        this.melo.animations.add("walk", [10,11,12,13,14,15,16,17], 12, true);
        this.melo.animations.add("jump", [18,19,20,21,22,23,24,25], 12, false);

        this.melo.scale.x=this.meloSize;
        this.melo.scale.y=this.meloSize;

        this.melo.animations.play("idle");
        this.melo.anchor.set(0.5, 0.5);

        this.monsterGroup=game.add.group();
        this.monsterGroup.createMultiple(10, "monster");


        game.physics.arcade.enable([this.melo, this.monsterGroup]);
        this.melo.body.gravity.y = 100;
        this.melo.body.bounce.set(0.25);
        this.melo.body.collideWorldBounds = true;

        game.camera.follow(this.melo);
        cursors=game.input.keyboard.createCursorKeys();
        this.map.setTileIndexCallback(25, this.gotWord,this);

        this.makeMonsters();
    },

    makeMonsters:function(){
        for() {
            var monster=this.monsterGroup.getFirstDead();
            var xx=game.rnd.integerInRange(0, game.world.width);
            monster.reset(xx,50);
            monster.enabled=true;
            monster.body.velocity.x = -100;
            monster.body.gravity.y=100;
            monster.body.collideWorldBounds=true;
            monster.name="monster";
        }
    },

    gotWord: function(sprite, tile) {
        if(sprite.name == "monster") {
            return;
        }

        this.map.removeTile(tile.x,tile.y, this.layer);

    },

    update: function () {
        game.physics.arcade.collide(this.melo, this.layer);
        game.physics.arcade.collide(this.monsterGroup, this.layer);
        if(this.melo.body.onFloor()) {
            if (Math.abs(this.melo.body.velocity.x) > 100) {
                this.melo.animations.play("walk");
            } else {
                this.melo.animations.play("idle");
            }
        }

        if (this.melo.body.velocity.x>0) {
            this.melo.scale.x=this.meloSize;
        } else {
            this.melo.scale.x=-this.meloSize;
        }

        if (cursors.left.isDown) {
            this.goLeft();

        }
        if (cursors.right.isDown) {
            this.goRight();
        }

        //JUMP
        if (cursors.up.isDown) {
            this.doJump();
        }

        //STOPPING
        if (cursors.down.isDown) {
            this.doStop();

        }
    },

    goLeft:function() {
        this.melo.body.velocity.x=-250;
    },

    goRight:function(){
        this.melo.body.velocity.x=250;
    },

    doStop:function(){
        this.melo.body.velocity.x=0;
        this.melo.body.velocity.y=0;

    },

    doJump:function(){
        this.melo.body.velocity.y= -Math.abs(this.melo.body.velocity.x) -150;
        this.melo.animations.play("jump");
    }


};


