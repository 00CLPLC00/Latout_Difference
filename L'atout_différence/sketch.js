

let x=125;
let xText=175;
let speed = 0.01;




function setup() {
  
	createCanvas(400, 400);
    
	ellipseMode(CENTER);
  // rectMode(CENTER);
    background(255);
}

function mousePressed(){
  background(255);
}

function draw(){
  push();
  if(x>250, x<100){
    speed = speed *-1;
    fill(random(100,255),random(125,255),random(0,255),random(25,255));
    
  }
  x += speed*-1;
  pop();
  
  //POEME
  //Premiere ligne
  push();
  fill(random(100,255),random(125,255),random(0,255),random(25,255));
  textSize(16);
  text('La difference dans le sens',x,15)
  pop();
  //Deuxieme ligne
  push();
  fill(0);
  textSize(16);
  text('Reviens au centre sans ',x,30)
  pop();
  //Troisieme ligne
  push();
  fill(0);
  textSize(16);
  text('Les penseurs bancales qui dansent ',x,45)
  pop();
  //Quatrieme ligne
  push();
  fill(random(100,255),random(125,255),random(0,255),random(25,255));
  textSize(16);
  text('Ouvrant le chemin des perdus ',x,60)
  pop();
  //cinquieme ligne
  push();
  fill(0);
  textSize(16);
  text("Vers l'horizon rance hypnotique  ",x,75)
  pop();
  //sixieme ligne
  push();
  fill(0);
  textSize(16);
  text("Servant les sourires  ",x,90)
  pop();
  //sixieme ligne
  push();
  fill(0);
  textSize(16);
  text("Des allers retours déchus  ",x,105)
  
  // x+=speed;
  pop();
  
  
  
  
  push();
  fill(random(0,255),random(0,255),random(0,255),random(25,255));
  text('CLPLC',360,395)
  pop();
	
  
    var ang1 = TWO_PI * noise(0.0002*frameCount + 80);		
	var ang2 = TWO_PI * noise(0.01*frameCount + 100);
	var ang3 = TWO_PI * noise(0.005*frameCount + 50);
	var rx = 60 * noise(0.1*frameCount + 40);
	var tx = 200 * noise(0.25*frameCount + 50);
    var sx = 30  * noise(0.50*frameCount + 50);
	var size1 = random(20,90) * noise(0.01*frameCount + 60);
	var size2 = random(30,50) * noise(0.01*frameCount + 60);
    var size3 = random(5,30) * noise(0.01*frameCount + 60);


	translate(width/2, height/2);
  //Cercle 1
	for (var i = 0; i < 6; i++) {
	push();
		rotate(ang3 * i / 6);
		translate(tx, 0);
        noStroke();
        fill(random(0,255),random(0,255),random(0,255),random(25,255))
		circle(0, 0,size1);
      
     //Cercle2
		for (var j = 0; j < 6; j++) {
		push();
          translate(rx,0);
		  rotate(ang2 * j / 6);          
          noStroke();
          fill(random(0,255),random(0,255),random(0,255),random(25,255))
		  circle(0, 0, size2);
		pop();
          
          //Cercle3
              for (var k = 0; k < 3; k++) {
		push();
              translate(sx,0);
			  rotate(ang1 * j / 3);
              noStroke();
              fill(random(0,255),random(0,255),random(0,255),random(25,255))
			  circle(0, 0, size2);
	    pop();
          
		}}		
		// translate()
		pop();
	}
}
