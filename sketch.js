var button1,button2,button3,button4,button5;
var gameState=0;
function setup() {
  createCanvas(windowWidth,windowHeight);
 button1=createButton('Vehicals');
 button2=createButton('First-Aid');
 button3=createButton('General Electrical Problems');
 greeting = createElement('h2');
}

function draw() {
  background("yellow");
  textSize(30);
  fill("red")
  text("Cure For All" ,750, 90);  
  textSize(20);
  fill("green")
  text("Rules" ,300, 150);
  text("1)Select the proper catogory to your problem." ,180, 200);  
  text("2)Follow sequnce of steps and do not skip any." , 180,250 );
  button1.position (180, 300);
  button2.position (250, 300);
  button3.position (180, 350);
  button1.mousePressed(()=>{
    gameState=1;
    if(gameState===1)
    {greeting.html("Select Your Specific Problem ")
     greeting.position(700,150);}
  })
  drawSprites();
}
