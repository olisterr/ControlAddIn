const controlAddIn = document.getElementById('controlAddIn');
const canvas = document.createElement("CANVAS");
const width = 800;
const height = 500;
canvas.width = width;
canvas.height = height;
canvas.id = "canvas";
canvas.background = "black";
controlAddIn.appendChild(canvas);
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var counter = 0; 
var globalSpeedLimit = 0;
var level = 0;
var person, obstacles = [];
var starPos = [];
document.addEventListener("keydown", keyDownHandler, false);
function random(start, end){
    function map(value, start1, end1, start2, end2){
        return ((value - start1)/(end1- start1))*(end2 - start2) + start2;
    }   
    return map(Math.random(), 0, 1, start, end); 
}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        person.moveRight();
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        person.moveLeft();
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        person.moveUp();
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        person.moveDown();
    }
}


function init(){
    counter = 0; 
    globalSpeedLimit = 0;
    level = 0;
    person = new Person(); 
    canvas.background = "black";
    obstacles = [];
    starPos = [];
    for(let i = 0; i < 10; i++){
        obstacles.push(
            new Obstacles(
                width + random(10, 40),
                random(30, height)
            )
        );
    }

    for(let i = 0; i < 100; i++){
        starPos.push({
            x : random(0, width),
            y : random(0, height)
        });
    }
    
    console.log("Initialization Done!");     
}

function dist(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


function render(){
    
    const image = document.createElement('img');
    image.src = "https://www.pikpng.com/pngl/b/32-320251_full-moon-png.png";
    image.height = 80;
    image.width = 80;
    console.log("Starting render");
    ctx.clearRect(0,0, canvas.width, canvas.height);
    // starPos.forEach(star => {
    //     ctx.beginPath();
    //     ctx.arc(star.x, star.u, 2, 0, Math.PI*2);
    //     // ctx.fillStyle = "#0095DD";
    //     ctx.fillStyle = "#FFFFFF";
    //     ctx.fill();
    //     ctx.closePath();
    // });
    // canvas.background = "black";
    drawScore();
    // drawMoon(image);
    person.render();
    for(let i = obstacles.length - 1; i >= 0; i--){
        obstacles[i].render();
        obstacles[i].move();
        if(obstacles[i].out()){
            obstacles.splice(i, 1);
            obstacles.push(
                new Obstacles(
                    width + random(10, 40),
                    random(30, height),
                    globalSpeedLimit
                )
            );
            counter++;
            if(counter % 10 == 0){
                level++;
                person.incrementLevel();
                if(level % 10 == 0){
                    globalSpeedLimit++;
                }
            }
        }
    }

    obstacles.forEach(elem =>{
             if(person.hasCollided(elem)){
                 alert("You lose!");
                init();
             }
    });

    requestAnimationFrame(render);
}

//var canvas = controlAddIn.appendChild(canvas);
function drawScore(){
    ctx.font = "16px Arial";
    // ctx.fillStyle = "#0095DD";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Level: "+ level, 30, 50);
    ctx.fillText("Score: "+ counter, width - 200, 40);
}

// function map(value, start1, end1, start2, end2){
//     return ((value - start1)/(end1- start1))*(end2 - start2) + start2;
// }

function drawMoon(i){
    if(i)  ctx.drawImage(i, 0 , 0);
}

class Person{

    constructor(){
        this.radius = 10;
        this.xinc = 5;
        this.pos = {
            x: 60,
            y: height - 80
        };

    }
    

    
    incrementLevel(){
        if(this.xinc  <= 3) return;
        this.xinc-=0.3;
    }
    render(){
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI*2);
        // ctx.fillStyle = "#0095DD";
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }


    moveRight(){
        if(this.pos.x > width - this.radius){
            this.pos.x = width - this.radius;
            return;  
        }
            this.pos.x += this.xinc;
    }

    moveLeft(){
        if(this.pos.x < this.radius){
            this.pos.x = this.radius;
            return;  
        }
            this.pos.x -= this.xinc;
    }

    moveUp(){
        if(this.pos.y < this.radius){
            this.pos.y = this.radius;
            return;
        }
        this.pos.y -= this.xinc;
    }

    moveDown(){
        if(this.pos.y > height - this.radius){
            this.pos.y = height - this.radius;
            return;
        }
        this.pos.y += this.xinc;
    }

    hasCollided(block){
        return dist(this.pos.x, this.pos.y, block.x, block.y) < this.radius + block.width; 
    }

}

class Obstacles{
    constructor(x, y, minSpeed)
    {
        this.minSpeed = minSpeed || 2;
        this.x=x;
        this.y=y;
        this.width=random(20, 30);
        this.speed = random(this.minSpeed, this.minSpeed + 5);
    }
    render()
    {
        // fill(255,200,0);
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.arc(this.x, this.y, this.width, 0, Math.PI*2);
        //ctx.fillStyle = "#0095DD";
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath()

    }

    move(){
        this.x-= this.speed;
    }

    out(){
        return this.x < 0;
    }
}

init();
render();