let xAtor = 100;
let yAtor = 366;
let colisao = false;

function mostraAtor() {
  image(imgAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
}

function verificaColisao() {
  for (let i = 0; i < imgCarros.length; i = i + 1) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      50,
      40,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      colidiu();
    }
  }
}

function colidiu() {
  yAtor = 366;
}
