class Player {

    constructor(game) {
        this.game = game
        this.animator = new Animator(
            ASSET_MANAGER.getAsset("./sprite.png"),0, 1570, 330, 375, 4, .3);
        
        this.x = 0;
        this.y = 0;
        this.speed = 200;
    }

    update() {
        if (this.game.keys["w"] || this.game.keys["ArrowUp"]) {
            this.y -= this.speed * this.game.clockTick;
        }
        if (this.game.keys["s"] || this.game.keys["ArrowDown"]) {
            this.y += this.speed * this.game.clockTick;
        }
        if (this.game.keys["a"] || this.game.keys["ArrowLeft"]) {
            this.x -= this.speed * this.game.clockTick;
        }
        if (this.game.keys["d"] || this.game.keys["ArrowRight"]) {
            this.x += this.speed * this.game.clockTick;
        }
    }

    draw(ctx) {
        if (this.game.keys["w"] || this.game.keys["ArrowUp"]) {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, "up");
        }
        else if (this.game.keys["s"] || this.game.keys["ArrowDown"]) {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, "down");
        }
        else if (this.game.keys["a"] || this.game.keys["ArrowLeft"]) {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, "left");
        }
        else if (this.game.keys["d"] || this.game.keys["ArrowRight"]) {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, "right");
        } else {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, "idle");
        }
    }

}