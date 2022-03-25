class Guldliv extends GameObject {
 
    static spawnInterval = 500;
    static timeSinceLastSpawn = Guldliv.spawnInterval;
 
    constructor() {
        let drawOrder = 10;
        let tag = "guldliv";
        super(drawOrder, tag);
        this.sound = new Audio("../assets/sounds/coin.wav");
        this.image = new Image(60, 60);
        this.image.src = "../assets/images/guldliv.png";
        this.hitboxRadius = 30;
        this.xSpeed = -10;
        this.value = 5;
        this.xPosition = spawnXPosition;
        this.yPosition = randomBetween(0, canvas.height);
        this.yOffset = 0;
        this.oscillilationScale = randomBetween(0, 500);
        this.oscillilationTime = 0;
        this.oscillilationSpeed = randomBetween(0, 0.05);
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
       liv = liv+1
       this.destroy()
        }
       
    }
 
    oscillate() {
        this.oscillilationTime += this.oscillilationSpeed;
        this.yOffset = Math.sin(this.oscillilationTime) * this.oscillilationScale;
    }
}