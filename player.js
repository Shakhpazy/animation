class Player {

    constructor(game) {
        this.game = game
        this.animator = new Animator(
            ASSET_MANAGER.getAsset("./sprite.png"),0, 1570, 330, 375, 4, .3);
        
        this.x = 0;
        this.y = 0;
        this.speed = 200;
        this.animation = "idle";
    }

    update() {
        let moving = false;

        this.speed = this.game.keys["shift"] ? 400 : 200;
        let movex = 0
        let movey = 0
        if (this.game.keys["w"] || this.game.keys["ArrowUp"]) {
            movey = -(this.speed * this.game.clockTick);
            this.animation = "up";
            moving = true;
        }
        if (this.game.keys["s"] || this.game.keys["ArrowDown"]) {
            movey = this.speed * this.game.clockTick;
            this.animation = "down";
            moving = true;
        }
        if (this.game.keys["a"] || this.game.keys["ArrowLeft"]) {
            movex = -(this.speed * this.game.clockTick);
            this.animation = "left";
            moving = true;
        }
        if (this.game.keys["d"] || this.game.keys["ArrowRight"]) {
            movex = this.speed * this.game.clockTick;
            this.animation = "right";
            moving = true;
        } 
        if (!moving) {
            this.animation = "idle";
        }

        //check for bounds to not allow the player to leave the bounding area
        if (0 <= this.x + movex && this.x + movex <= 940) {
            this.x += movex;
            console.log(this.x);
        }
        if (0 <= this.y + movey && this.y + movey <= 670) {
            this.y += movey;
        }
    }


    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.animation);
    }

}