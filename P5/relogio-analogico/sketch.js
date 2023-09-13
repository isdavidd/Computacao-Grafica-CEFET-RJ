let raio = 250; 
let numRelogio = 12; // Divisão do relógio em partes iguais para representar os números referentes às horas

/* Coordenadas a serem utlizadas */
let px = 0;
let py = 0;

let hora, minuto, segundo;

/* Tamanho de cada ponteiro */
let raioSegundos, raioMinutos, raioHoras;

function setup() {
  createCanvas(800, 600);

  raioSegundos = raio * 0.8;
  raioMinutos = raio * 0.7;
  raioHoras = raio * 0.6;
}

function draw() {
  background(235);
  translate(width / 2, height / 2);

  /* Desenha o círculo do relógio */
  strokeWeight(7);  
  stroke(0);
  noFill(); 
  circle(0, 0, raio * 2); 

  for (let i = 0; i < numRelogio; i++) {
    let angulo = map(i, 0, numRelogio, -HALF_PI, TWO_PI - HALF_PI);
    let x = raio * cos(angulo);
    let y = raio * sin(angulo);

    /* Condição que escreve os números do relógio, 
    caso o número seja divisível por 3 a fonte será maior, dando mais destaque */

    /* Variável que prevene que o número 0 apareça no lugar do 12 */    
   let numeroPonteiro = i == 0 ? 12 : i;

    if (numeroPonteiro % 3 == 0) {
        fill(0);
        noStroke();
        textSize(45);
        textAlign(CENTER, CENTER);
        text(numeroPonteiro, x * 0.9, y * 0.9);

    } else {
        fill(0);
        noStroke();
        textSize(26);
        textAlign(CENTER, CENTER);
        text(numeroPonteiro, x * 0.9, y * 0.9);
    }

  }

  /* Armazena valores refentes às medidas de tempo */
  segundo = second();
  minuto = minute() + segundo / 60;
  hora = hour() % 12 + minuto / 60;

  Ponteiro(segundo, raioSegundos, 60, 'red');
  Ponteiro(minuto, raioMinutos, 60, 'blue');
  Ponteiro(hora, raioHoras, 12, 'green');
}

/* Função para facilitar e organizar a criação de ponteiros */
function Ponteiro(medidaTempo, raioPonteiro, divisaoMedidaTempo, cor) {
  let anguloPonteiro = map(medidaTempo, 0, divisaoMedidaTempo, -HALF_PI, TWO_PI - HALF_PI);

  px = raioPonteiro * cos(anguloPonteiro);
  py = raioPonteiro * sin(anguloPonteiro);

  stroke(cor);
  strokeWeight(4);  
  line(0, 0, px, py);
}