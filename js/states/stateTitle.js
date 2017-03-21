var StateTitle = {

    preload: function () {


    }
    , create: function () {

        var titleText = game.add.text(game.world.centerX, game.world.centerY - 100, "Melo v.3.0");
        titleText.fill = "#ffffff";
        titleText.anchor.set(0.5, 0.5);

        this.btnStart = gameButtons.addButton("start", -1, -1, this.startGame, this);
    }
    , startGame: function () {
        game.state.start("StateMain");
    }
    , update: function () {

    }

}