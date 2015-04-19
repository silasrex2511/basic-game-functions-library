var c = document.getElementById("theCanvas");
var ctx = c.getContext("2d");

var runSpeed = 3;
var score = 0, alive = true, restart = false, id = 0, highScore = 0;
var backGround = new imageData(0,0,c.width,c.height,"res/images/backGround.png","useless");
var ground = new rectMngr(0,c.height - 20,c.width, 20,"#444","ground");
var flapper = new rectMngr(c.width/5*2,c.height/2,40,40,"#700","p1");
var objects = [], tubeX = 685, tubeHeight, tubeY;
for(var i = 0; i < 1000; i++){
	tubeHeight = Math.floor((Math.random() * 295) + 75);
	tubeY = 600 - tubeHeight;
	objects[objects.length] = new rectMngr(tubeX,tubeY,80,tubeHeight,"#0f0","tube");
	objects[objects.length] = new rectMngr(tubeX,0,80,tubeY - 155,"#0f0","tube");
	tubeX += 350;
}

function main(){
	setInterval(render,1000/60);
}
main();

function render(){
	update();
	ctx.fillStyle = "#000";
	ctx.fillRect(0,0,c.width,c.height);
	imageShow(backGround);
	for(var i = 0; i < objects.length; i++){
		imageShow(objects[i]);
	}
	imageShow(ground);
	if(alive){
		drawString("Score: " + Math.floor(score),"30px Arial",20,20,"#333");
	}
	imageShow(flapper);
	if(!alive){
		ctx.fillStyle = "rgba(0,150,220,0.8)";
		ctx.fillRect(0,0,c.width,c.height);
		drawString("Score: " + Math.floor(score),"74px Arial",200,300,"#000");
		drawString("Press ENTER to retry","32px Arial",200,350,"#0ff");
		drawString("High Score: " + highScore,"16px Arial",500,450,"#000");
		miscPut();
	}
}

function update(){
	gravity(flapper,5);
	if(alive){
		inPut(flapper);
	}
	for(var i = 0; i < objects.length; i++){
		objects[i].x -= runSpeed;
		if(collisionCheck(flapper,objects[i])){
			runSpeed = 0;
			alive = false;
		}
	}
	if(!collisionCheck(flapper,ground)){
		if(alive){
			jump(flapper,flapper.up,15,5,5);
			score += 1/30;
		}
	}
	if(score > highScore){
		highScore = Math.floor(score);
	}
	if(collisionCheck(flapper,ground)){
		flapper.y = ground.y - flapper.height;
		runSpeed = 0;
		alive = false;
		score = Math.floor(score);
	}
	if(!alive){
		if(restart){
			id++;
			alive = true;
			tubeX = 685;
			score = 0;
			runSpeed = 3;
			flapper.y = c.height/2;
			objects.splice(0,objects.length);
			for(var i = 0; i < 1000; i++){
				tubeHeight = Math.floor((Math.random() * 295) + 75);
				tubeY = 600 - tubeHeight;
				objects[objects.length] = new rectMngr(tubeX,tubeY,80,tubeHeight,"#0f0","tube");
				objects[objects.length] = new rectMngr(tubeX,0,80,tubeY - 155,"#0f0","tube");
				tubeX += 350;
			}
		}
	}
	worldCol(flapper,"wall");
}

function inPut(rect){
    c.onmousedown = function(e){
	    rect.up = true;
	}
	c.onmouseup = function(e){
		rect.up = false;
	}
}

function miscPut(){
	kd.ENTER.down(function(){
        restart = true
    });
    kd.ENTER.up(function(){
        restart = false;
    });
    kd.tick();
}
