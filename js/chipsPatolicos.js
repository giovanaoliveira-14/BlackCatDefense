const selectZumbis = document.querySelector("#zumbiCatalogados");
const container_description = document.querySelector(
  ".container__description-zombie"
);

const informacoesZumbi = document.createElement("ul");
informacoesZumbi.classList.add("description");

// Consumir a API
const url = "https://api-blackcat-defense.vercel.app/v1/zumbis";

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let zumbis = data.data;

    return zumbis.map(function (zumbi) {
      const idZumbi = zumbi.zumbi_id;
      const optionZumbi = document.createElement("option");
      optionZumbi.value = idZumbi;
      optionZumbi.text = `Zumbi ${idZumbi}`;
      selectZumbis.appendChild(optionZumbi);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

// Resgatar o valor do option e resgatar as informações do zumbi seleicionado

selectZumbis.addEventListener("change", function () {
  const valueZumbi = selectZumbis.value;
  const Url = `https://api-blackcat-defense.vercel.app/v1/zumbis/${valueZumbi}`;

  fetch(Url)
    .then((response) => response.json())
    .then((data) => {
      let zumbi = data.data;

      const idZumbi = zumbi.zumbi_id;
      const imageZumbi = zumbi.image;
      const idadeZumbi = zumbi.age;
      const pesoZumbi = zumbi.weight;
      const sexoZumbi = zumbi.gender;
      const alturaZumbi = zumbi.height;
      const sangueZumbi = zumbi.blood_type;
      const musicaZumbi = zumbi.music_style;
      const esporteZumbi = zumbi.sport;
      const jogoZumbi = zumbi.favorite_game;
      const forcaZumbi = zumbi.strength;
      const velocidadeZumbi = zumbi.velocity;
      const inteligenciaZumbi = zumbi.intelligence;
      const perigoZumbi = zumbi.dangerousness;


      informacoesZumbi.innerHTML = `
        <div>
        <li><b>ID</b>: ${idZumbi}</li>
        <li><b>Idade</b>:${idadeZumbi} anos</li>
        <li><b>Sexo</b>: ${sexoZumbi} </li>
        <li><b>Altura</b>: ${alturaZumbi} metros</li>
        <li><b>Peso</b>:${pesoZumbi} kg</li>
        </div>

        <div>
        <li><b>Força</b>: ${forcaZumbi}</li>
        <li><b>Velocidade</b>:  ${velocidadeZumbi} </li>
        <li><b>Inteligência</b>:  ${inteligenciaZumbi}</li>
        </div>

        <div>
        <li><b>Gosto Musical</b>: ${musicaZumbi}</li>
        <li><b>Esporte</b>:  ${esporteZumbi} </li>
        <li><b>Jogo preferido</b>:  ${jogoZumbi}</li>
        </div>

        <div>
        <li><b> Periculosidade</b>:  ${perigoZumbi}</li>
        <li><b>Pontos fracos</b>: Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</li>
        </div>`;

        container_description.appendChild(informacoesZumbi);
    })
    .catch((error) => {
      console.error("Erro na requisição à API:", error);
    });
});