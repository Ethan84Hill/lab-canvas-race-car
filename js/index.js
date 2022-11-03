window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};
  console.log('hello')
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let dodge;



  function startGame() {
      driveloop()
  }


  const keys = [];
  window.addEventListener("keydown", function (e) {
      keys[e.which] = true;
    });
    window.addEventListener("keyup", function (e) {
      keys[e.which] = false;
    });

  function driveloop() {
    dodge = window.requestAnimationFrame(driveloop, canvas);
    ctx.clearRect(0, 0, 500, 700)

    if (keys[39]) {raceCar.xCord += 5;}
    if (keys[37]) {raceCar.xCord -= 5;}

    road.draw();
    raceCar.draw();
    obstacles.draw();
  }


  let xCord = 225
  let yCord = 600
  const imgCar = new Image();
  imgCar.src = 'images/car.png'
  let raceCar = {
    xCord: 225,
    yCord: 600,
    width: 50,
    height: 90,
    draw: function() {
      ctx.save();
      ctx.drawImage(imgCar, this.xCord, this.yCord, this.width, this.height)
      ctx.restore();
    }
  }

  let obstacles = {
    w: Math.floor(Math.random() * canvas.width),
    h: 30,
    speed: 1, 
    x: Math.floor(Math.random() * canvas.width),
    y: 0,
    color: 'red',
    draw: function() {  
      ctx.fillStyle = 'brown'
      ctx.fillRect(obstacles.x, obstacles.y, obstacles.w, obstacles.h)
    }
  }


  const imgRoad = new Image();
  imgRoad.src = 'images/road.png';

  let road = {
    draw: function() {
      ctx.drawImage(imgRoad, 0, 0, 500, 700)
    }
  }

 





 

  //  collisionCheck(obstacle) {
  //    if (
  //      this.x < obstacle.x + obstacle.width &&
  //      this.x + this.width > obstacle.x &&
  //      this.y < obstacle.y + obstacle.height &&
  //      this.height + this.y > obstacle.y
  //    ) {
  //      // Collision detected!
  //      return true;
      
  //    } else {
  //      // No collision
  //      return false;
  //    }
  //  }