var labirinto = [
  [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 22],
  [22, 11, 88, 11, 22, 22, 22, 22, 11, 11, 11, 11, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 22, 22, 22, 22, 11, 11, 11, 11, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 22, 22, 22, 22, 11, 11, 11, 11, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 22, 22, 22, 22, 11, 11, 11, 11, 22, 22, 22, 22, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]
// 22 nao posso andar
// 11 posso andar
// 33 posição atual
// 88 posição dos produtos
var clc = require("cli-color");
prompt = require ('prompt-sync');
function colorir(text) {
  if (text == 22) {
    return clc.bgXterm(198)('  ');
  } else if (text == 11) {
    return clc.bgXterm(159)('  ');
  } else if (text == 88) {
    return clc.bgXterm(38)('  ');
  } else {
    return clc.bgXterm(214)('  ');
  }
}

function mostrarLabirinto() {
  console.clear()
  for (let linha of labirinto) {
    var linhaFormatada = [];
    for (let item of linha) {
      linhaFormatada.push(colorir(item));
    }
    console.log(linhaFormatada.toString().replaceAll(',', ''));
  }
}

var x = 0;
var y = 5;

function desce() {
  if (labirinto[x + 1][y] !== 22) {
    labirinto[x][y] = 11
    x = x + 1;
    labirinto[x][y] = 33
    contador ++;
  }
}

function sobe() {
  if (labirinto[x - 1][y] !== 22 && (x - 1) >= 0) {
    labirinto[x][y] = 11
    x = x - 1;
    labirinto[x][y] = 33
    contador ++;
  }
}

function direita() {
  if (labirinto[x][y + 1] !== 22) {
    labirinto[x][y] = 11
    y = y + 1;
    labirinto[x][y] = 33
    contador ++;
  }
}

function esquerda() {
  if (labirinto[x][y - 1] !== 22) {
    labirinto[x][y] = 11
    y = y - 1;
    labirinto[x][y] = 33
    contador ++;
  }
}

var contador = 0;
while (true) {
  mostrarLabirinto();
  console.log('Contador de passos:', contador);
  var escolha = prompt('wasd');
  if (escolha == 'w') {
    sobe();
  } else if (escolha == 'a') {
    esquerda();
  } else if (escolha == 's') {
    desce();
  } else if (escolha == 'd') {
    direita();
  }
}
