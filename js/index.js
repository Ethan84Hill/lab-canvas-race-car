window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
  function startGame() {
    console.log('hello')
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const imgRoad = new Image();
    imgRoad.src = 'images/road.png';
     // imgRoad.onload = function() {
    ctx.drawImage(imgRoad, 0, 0, 500, 700)
    // }


      let xCord = 225
      let yCord = 600
       const imgCar = new Image();
       imgCar.src = 'images/car.png'
      ctx.drawImage(imgCar, xCord, yCord, 50, 90)
      window.addEventListener('keydown', function(event) {
        // const imgCar = new Image();
        // imgCar.src = 'images/ca4r.png'
        ctx.clearRect(0, 0, 500, 700)
        ctx.drawImage(imgRoad, 0, 0, 500, 700)
        ctx.drawImage(imgCar, xCord, yCord, 50, 90)
        switch(event.code) {
          case 'ArrowRight':
          xCord += 10;
           break;
          case 'ArrowLeft':
            xCord -= 10;
            break;
        }
      })
    
     


    
  }
};

 





 class CarImage{
   constructor(){
     this.x = 225;
     this.y = 600;
     this.width = width;
     this.height = height;
     this.imgCar = imgCar;
     this.draw();
     // let xCord = 225
     // let yCord = 600
      const imgCar = new Image();
     imgCar.src = 'images/car.png'
      //ctx.drawImage(imgCar, xCord, yCord, 50, 90)
   }

  
   moveLeft(){
     this.x -= 10;
   }
   moveRight(){
     this.x += 10;
   }
   draw() {
     ctx.drawImage(this.imgCar, this.x, this.y, 50, 90)
   }

   collisionCheck(obstacle){
     if (
       this.x < obstacle.x + obstacle.width &&
       this.x + this.width > obstacle.x &&
       this.y < obstacle.y + obstacle.height &&
       this.height + this.y > obstacle.y
     ) {
       // Collision detected!
       return true;
      
     } else {
       // No collision
       return false;
     }
   }

 }

 const raceCar = new CarImage();

 window.addEventListener('keydown', function(event) {
   switch(event.code) {
     case 'ArrowRight':
       raceCar.moveRight();
       break;
     case 'ArrowLeft':
       raceCar.moveLeft();
       break;
   }
   updateCanvas();
 })

 function updateCanvas() {
   ctx.clearRect(0, 0, 500, 700);

   raceCar.draw()
 }

 updateCanvas()