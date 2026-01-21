class Animator {

    constructor(spriteSheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, {spriteSheet, xStart, yStart, width, height, frameCount, frameDuration});
        
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
        this.idleYStart = 75;
        this.idleXStart = 0;
    }
        
    drawFrame(tick, ctx, x, y, direction) {
        if (direction != "idle") {
            this.elapsedTime += tick;
            if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        }
        
        
        let frame = this.currentFrame();
        if (direction == "idle") {
            this.yStart = this.idleYStart;
            this.xStart = this.idleXStart;
            frame = 0
        }
        else if (direction == "right") {
            this.yStart = 1570
        }
        else if (direction == "up") {
            this.yStart = 570
        }
        else if (direction == "down") {
            this.yStart = 75
        } else if (direction == "left") {
            this.yStart = 1070
        }

        ctx.drawImage(this.spriteSheet, 
            this.xStart + this.width*frame, this.yStart,
            this.width, this.height,
            x, y,
            this.width*1/4, this.height*1/4
        );
    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    }

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    }

}