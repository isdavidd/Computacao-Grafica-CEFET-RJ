function setup() {
    createCanvas(1000,800);
    // rectMode(CENTER);
}

function draw() {
    background(200, 70);

    
    translate(width / 2, height / 2);
    rotate(frameCount * 0.01);
    fill("yellow");
    circle(0, 0, 100);
    

    mercurio();
    terra();

    /* Para fazer 4 sistemas solares ao mesmo tempo: */

   /* push();
    translate(width/4, height/4);
    sistemaSolarAlternativo();
    pop();

    push();
    translate(3 * width/4, height/4);
    sistemaSolarAlternativo();
    pop();

    push();
    translate(3 * width/4, 3 * height/4);
    sistemaSolarAlternativo();
    pop();

    push();
    translate(width/4, 3 * height/4);
    sistemaSolarAlternativo();
    pop();
   */
}

function terra() {
    push();
    
    //Terra
    translate(width/4, 0);
    rotate(frameCount/100);
    fill('blue');
    circle(0, 0, 50);

    //Lua
    translate(width/16, 0);
    rotate(frameCount/100);
    fill('grey');
    circle(0, 0, 20);

    pop();
}

function mercurio() {
    /*
    O push salva o estado das translações da animação e em sequência ele é alterado pelo código    
    */
    push();

    //Mercúrio
    translate(width/8, 0);
    rotate(frameCount/50);
    fill('red');
    circle(0, 0, 40);

    /* O pop restaura a translação original da animação */
    pop();
}

function sistemaSolar() {
    push()
    
    //Sol
    rotate(frameCount * 0.01);
    fill("yellow");
    circle(0, 0, 100);
    
    terra();
    mercurio();
    
    pop();
    
}

function sistemaSolarAlternativo() {
    // push();

    // translate(width / 2, height / 2);
    rotate(frameCount * 0.01);
    fill("yellow");
    circle(0, 0, 100);
    

    mercurio();
    terra();

    // pop();
}