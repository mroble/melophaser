var StateLoad = {

    preload: function () {

        var empty = game.add.image(0, 0, "loadingEmpty");
        var full = game.add.image(0, 0, "loadingFull");

        empty.anchor.set(0, 0.5);
        full.anchor.set(0, 0.5);

        empty.x = game.width / 2 - empty.width / 2;
        empty.y = game.height / 2 - empty.height / 2;

        full.x = game.width / 2 - full.width / 2;
        full.y = empty.y;

        game.load.setPreloadSprite(full);

        //PRELOAD EVERYTHING HERE
        game.load.spritesheet("buttons", "images/ui/buttons-red.png", 265, 75);
        game.load.spritesheet("soundButtons", "images/ui/soundButtons-blue.png", 44, 44, 4);
        //replace your music below
        //game.load.audio("backgroundMusic", "audio/background/piano.mp3");

        game.load.spritesheet("melo", "images/main/robot.png", 80, 111, 28);
        game.load.image("tiles", "images/main/tiles.png");

        game.load.spritesheet("arrow", "images/arrowButtons.png", 60, 60, 4);
        game.load.spritesheet("monster", "images/main/monsters.png",50,50,2);

        game.load.image("bar1", "images/timer/bar1.png");
        game.load.image("bar2", "images/timer/bar2.png");
    },

    create: function () {
        game.state.start("StateTitle");
    },

    update: function () {

    }

}