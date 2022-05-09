class Diamond extends GameObject {
 
    static spawnInterval = 2000;
    static timeSinceLastSpawn = Diamond.spawnInterval;
 
    constructor() {
        let drawOrder = 8;
        let tag = "diamond";
        super(drawOrder, tag);
        this.sound = new Audio("../assets/sounds/coin.wav");
        this.image = new Image(60, 60);
        this.image.src = "../assets/images/diamond.png";
        this.hitboxRadius = 30;
        this.xSpeed = -10; //lavere hvis 144 fps
        this.value = 5;
        this.xPosition = spawnXPosition;
        this.yPosition = randomBetween(0, canvas.height);
        this.yOffset = 0;
        this.oscillilationScale = randomBetween(0, 500);
        this.oscillilationTime = 0;
        this.oscillilationSpeed = randomBetween(0, 0.1);
    }

    draw() {
        drawImage(
            this.image,
            this.xPosition,
            this.yPosition + this.yOffset,
            this.image.width,
            this.image.height
        );
 
        if(debugModeIsOn) {
            drawCircle(
                this.xPosition,
                this.yPosition + this.yOffset,
                this.hitboxRadius,
                hitboxColor
            );
        }
    }
 
    update(){
        // move the diamond
        this.xPosition += this.xSpeed;
        this.oscillate();
 
        if(gameState == "action") {
            // check if the diamond collides with the bird
            if(theseCirclesCollide(
                bird.xPosition,
                bird.yPosition,
                bird.hitboxRadius,
                this.xPosition,
                this.yPosition + this.yOffset,
                this.hitboxRadius
            ))
            { // if they do, increase the score
                this.sound.play();
                score.addPoints(this.value);
                this.destroy()
            }
        }
 
        // remove diamond if it goes off the screen
        if(this.xPosition < destructionXPosition) {
            this.destroy()
        }
    }
 
    oscillate() {
        this.oscillilationTime += this.oscillilationSpeed;
        this.yOffset = Math.sin(this.oscillilationTime) * this.oscillilationScale;
    }
}