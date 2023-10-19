const form = document.getElementById("register-zumbi");

form.addEventListener("submit", function (event) {

  const idade = document.getElementById("idade").value;
  const sexo = document.getElementById("sexo").value;
  const sangue = document.getElementById("tipoSangue").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const musica = document.getElementById("gostoMusical").value;
  const esporte = document.getElementById("esporte").value;
  const jogo = document.getElementById("jogo").value;

  const data = {
    age: idade,
    gender: sexo,
    weight: peso,
    height: altura,
    blood_type: sangue,
    music_style: musica,
    sport: esporte,
    favorite_game: jogo,
  };

  enviarDadosParaAPI(data);
});

function enviarDadosParaAPI(data) {
  fetch("https://api-blackcat-defense.vercel.app/v1/zumbis", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Erro na requisição à API:", error);
    });
}
