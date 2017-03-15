var StateMain = {

    preload: function () {
        game.load.spritesheet("melo", "images/main/melospritesheet.png", 100, 100, 6)

    },

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.robot=game.add.sprite(150,150, "melo");
        this.melo.animations.add("idle", [0,1,2], 9, true); //you can increase to 12 later after you fix the spritesheet ARGH
        this.melo.animations.add("walk", [3,4], 9, true);
        this.melo.animations.add("jump", [5], 9, false);

        this.melo.animations.play("idle");
        this.melo.anchor.set(0.5, 0.5);
        game.physics.arcade.enable(this.melo);
        this.melo.body.gravity.y=100;
        this.melo.body.bounce.set(0.25);
        this.melo.body.collideWorldBound=true;

    },

    update: function () {

    }

}