var StateMain = {

    preload: function () {
        game.load.spritesheet("melo", "images/main/melospritesheet.png", 100, 100, 6)

    },

    create: function () {
        this.robot=game.add.sprite(150,150, "melo");
        this.melo.animations.add("idle", [0,1,2], 9, true); //you can increase to 12 later after you fix the spritesheet ARGH
        this.melo.animations.add("walk", [3,4], 9, true);
        this.melo.animations.add("jump", [5], 9, false);

        this.melo.animations.play("walk");

    },

    update: function () {

    }

}