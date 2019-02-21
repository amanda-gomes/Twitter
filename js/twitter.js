document.getElementById("btnTwittar").addEventListener("click", twittar);
document.getElementById("tweet").addEventListener("input", contarCaracteres);
document.getElementById("tweet").addEventListener("keyup", tamTextarea);

function twittar() {
  let tweet = document.getElementsByTagName("textarea")[0];
  let tweets = document.getElementsByTagName("ul")[0];
  let newTweet = document.createElement("li");
  let contador = document.getElementsByTagName("strong")[0];
  let btnTwittar = document.getElementById("btnTwittar");
  let horas = gerarHorario();
  newTweet.innerHTML = horas + " - <b>Você</b>:<br>" + tweet.value;
  tweets.appendChild(newTweet);
  tweet.value = "";
  tweet.rows = 1;
  contador.textContent = 140;
  contador.setAttribute("class", "black")
  btnTwittar.setAttribute("disabled", "");
}

function contarCaracteres() {
  let tweet = document.getElementsByTagName("textarea")[0];
  let contagem = 140 - tweet.value.length;
  let contador = document.getElementsByTagName("strong")[0];
  contador.textContent = contagem;
  let btnTwittar = document.getElementById("btnTwittar");

  if (contagem === 140 || contagem < 0) {
    btnTwittar.setAttribute("disabled", "");
  } else {
    btnTwittar.removeAttribute("disabled", "");
  }

  if (contagem < 20 && contagem >= 10) {
    contador.setAttribute("class", "claro");
  } else if (contagem < 10) {
    contador.setAttribute("class", "escuro");
  } else {
    contador.setAttribute("class", "black");
  }
}

function tamTextarea() {
  let tweet = document.getElementById('tweet');

  if (tweet.scrollHeight > tweet.offsetHeight) {
    tweet.rows += 1;
  }
}

function gerarHorario() {
  let horario = new Date().getHours()
  let minutos = new Date().getMinutes();

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  return horario + ":" + minutos;
}