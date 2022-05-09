// execute the update function every 10 milliseconds
function update() {

    fillCanvas("rgb(179, 217, 255)");

    GameObject.drawAll();
    GameObject.updateAll();


         // spawn a new diamond when if it is time
         Diamond.timeSinceLastSpawn += timeSinceLastFrame;
         if(Diamond.timeSinceLastSpawn>Diamond.spawnInterval) {
             diamonds.push(new Diamond());
             Diamond.timeSinceLastSpawn = 0;
         }

          // spawn a new firework when if it is time
          if(gameState == "action" &&
    Firework.timeSinceLastSpawn > Firework.spawnInterval) {
        new Firework ();
        Firework.timeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        Firework.timeSinceLastSpawn += timeSinceLastFrame;
    }

     // spawn a new guldliv when if it is time
     if(gameState == "action" &&
     Guldliv.timeSinceLastSpawn > Guldliv.spawnInterval) {
         new Guldliv ();
         Guldliv.timeSinceLastSpawn = 0;
     }
 
     if(gameState == "action") {
         Guldliv.timeSinceLastSpawn += timeSinceLastFrame;
     }


     // spawn a new cloud when if it is time
     Cloud.timeSinceLastSpawn += timeSinceLastFrame;
     if(Cloud.timeSinceLastSpawn>Cloud.spawnInterval) {
         new Cloud ();
         Cloud.timeSinceLastSpawn = 0;
     }

    // spawn new fireballs if it is time
    if(gameState == "action" &&
    Fireball.timeSinceLastSpawn > Fireball.spawnInterval) {
        new Fireball ();
        Fireball.timeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        Fireball.timeSinceLastSpawn += timeSinceLastFrame;
    }

    
    // spawn new coins
    if(gameState == "action" &&
    Coin.timeSinceLastSpawn > Coin.spawnInterval) {     
        new Coin ();
        Coin.timeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        Coin.timeSinceLastSpawn += timeSinceLastFrame;
    }

    if(debugModeIsOn) {
        drawText(
            "timeSinceLastFrame: " + timeSinceLastFrame,
            canvas.width/2,
            20,
            12,
            "black"
        );
    }

    if(liv==0){
        sec=sec;
    }


    // update timeSinceLastFrame and draw next frame
    timeOfCurrentFrame = new Date().getTime();
    timeSinceLastFrame = timeOfCurrentFrame - timeOfLastFrame;
    timeOfLastFrame = timeOfCurrentFrame;
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
