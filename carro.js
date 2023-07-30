let yCarros = [40, 96, 150, 210, 270, 318];
let xCarros = [600, 600, 600, 600, 600, 600];

function mostraCarro() {
  for (let i = 0; i < imgCarros.length; i = i + 1) {
    image(imgCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro() {
  xCarros[0] -= 2.3;
  xCarros[1] -= 3.2;
  xCarros[2] -= 2.7;
  xCarros[3] -= 4;
  xCarros[4] -= 3.3;
  xCarros[5] -= 2.4;
}

function voltaCarro() {
  for (let i = 0; i < imgCarros.length; i = i + 1) {
    if (xCarros[i] < -50) {
      xCarros[i] = 600;
    }
  }
}
