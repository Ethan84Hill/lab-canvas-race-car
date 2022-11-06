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
    drawObs();
    score();
    obsCollisions(raceCar, obstaclesArr[i])
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

  let obstaclesArr = []

  class Obstacle {
    constructor(){
      this.y = 0;
      this.x = Math.floor(Math.random() * canvas.width)
      this.h = 30;
      this.w = 200
    }
    draw(){
      ctx.fillStyle = 'brown'
      ctx.fillRect(this.x, this.y, this.w, this.h)
    }
  }

 function drawObs(){
    for(let i = 0; i < obstaclesArr.length; i++){
      obstaclesArr[i].y += 1
      obstaclesArr[i].draw()
    }
  }

  function clearObs() {
    clearInterval(obsInterval)
  }

  const imgRoad = new Image();
  imgRoad.src = 'images/road.png';

  let road = {
    draw: function() {
      ctx.drawImage(imgRoad, 0, 0, 500, 700)
    }
  }

 let obsInterval = setInterval(() => {
    obstaclesArr.push(new Obstacle())
  }, 2000)
 
  let startScore = 0

  function score() {
    const points = Math.floor(startScore += 0.01)
    ctx.font = '25px sans-serif'
    ctx.fillStyle = 'black'
    ctx.fillText(`Score: ${points}`, 370, 50)
  }

  function obsCollisions(car, obstacles) {
    if (
        car.xCord < obstacles.x + obstacles.w &&
        car.xCord + car.width > obstacles.x &&
        car.yCord < obstacles.y + obstacles.h &&
        car.yCord + car.height > obstacles.y
      ) {
        gameOver()
        clearObs()
      }
}

  function gameOver() {
    window.cancelAnimationFrame(dodge);

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, 500, 700)
    ctx.fillStyle = 'red'
    ctx.font = '40px sans-serif'
    ctx.fillText('Game Over!', 250, 100)
    ctx.fillStyle = 'white'
    ctx.font = '30px sans-serif'
    ctx.fillText(`Your Final Score: ${points}`, 250, 200)
  }