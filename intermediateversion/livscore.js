class Livscore extends GameObject {

    constructor () {
        let drawOrder = 11;
        super(drawOrder);
        this.image = new Image(60, 60);
        this.image.src = "../assets/images/liv.png";
        this.imageXPosition = 500;
        this.imageYPosition = 70;
        this.textXPosition = 530;
        this.textYPosition = 90;
        this.textSize = 50;
        this.textColor = "red";
        this.value = 0;
    }

    draw() {
        drawImage(this.image,
            this.imageXPosition,
            this.imageYPosition,
            this.image.width,
            this.image.height
        );
        drawText(
            "x"+ liv,
            this.textXPosition,
            this.textYPosition,
            this.textSize,
            this.textColor
        );
    }
}