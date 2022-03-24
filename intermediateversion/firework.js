class Firework extends GameObject {
 
    static spawnInterval = 500;
    static timeSinceLastSpawn = Firework.spawnInterval;
 
    constructor() {
        let drawOrder = 10;
        let tag = "firework";
        super(drawOrder, tag);
        this.sound = new Audio("../assets/sounds/coin.wav");
        this.image = new Image(60, 60);
        this.image.src = "../assets/images/firework.png";
        this.hitboxRadius = 30;
        this.xSpeed = -10;
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
                hitboxOND
            );
        }
    }
 
    update() {
        this.xPosition += this.xSpeed;

        if(this.xPosition < destructionXPosition) {
            this.destroy();
        }

        if  (
            theseCirclesCollide(
            bird.xPosition, bird.yPosition, bird.hitboxRadius,
            this.xPosition, this.yPosition, this.hitboxRadius)
            && gameState == "action") 
        {
            bird.canFlap = false;
            gameOverSound.play();
            flapText.isActive = false;
            gameOverText.isActive = true;
            gameState = "gameover";
        }
    }
 
    oscillate() {
        this.oscillilationTime += this.oscillilationSpeed;
        this.yOffset = Math.sin(this.oscillilationTime) * this.oscillilationScale;
    }
}