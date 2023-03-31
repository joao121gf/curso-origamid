for (let c = 1; c <= 10; c++) {
  console.log(c);
}

// Inicio condicao incremento
// o numero é 1
// enquanto ele for menor que 10
// faça isso

// while
var i = 10;
while (i > 0) {
  console.log(i);
  i--;
}



var videoGames = ["Switch", "PS4", "XBox", 'PS4'];


for (let cont = 0; cont < videoGames.length; cont++){
    process.stdout.write(videoGames[cont] + ' ')
    if (videoGames[cont] ==='PS4'){
        break
    }
}

// ele quebra quando encontra o break