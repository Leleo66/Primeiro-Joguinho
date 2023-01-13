
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

//imagens

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaInicio();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


