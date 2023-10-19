const container_zumbis = document.querySelector(".main__container-catalog");

// Total de zumbis que irá aparecer
const zumbisTotal = 3;

// Carregar o total de zumbis 
const CarregarZumbis = async () => {
  for (let i = 1; i <= zumbisTotal; i++) {
    await getZumbis(i);
  }
};

// Acessando a API e resgatando as informações
const getZumbis = async (id) => {
  let url = `https://api-blackcat-defense.vercel.app/v1/zumbis/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  cardZumbi(data);
};

// Com as informações dos zumbis resgatadas, o card referente a ele será gerado
const cardZumbi = (zumbi) => {
    const idZumbi = zumbi.data.zumbi_id;
    const imageZumbi = zumbi.data.image;
    const idadeZumbi = zumbi.data.age;
    const pesoZumbi = zumbi.data.weight;
    const sexoZumbi = zumbi.data.gender;
    const alturaZumbi = zumbi.data.height;
    const sangueZumbi = zumbi.data.blood_type;
    const forcaZumbi = zumbi.data.strength;
    const velocidadeZumbi = zumbi.data.velocity;
    const inteligenciaZumbi = zumbi.data.intelligence;

    const cardZumbi = document.createElement("li");
    cardZumbi.classList.add("catalog__item");
    cardZumbi.innerHTML = `
        <div class="item__figure-zumbi">
        <figure>
        <img src=" ${imageZumbi}" alt="Imagem de um zumbi em pixel art."/>
        </figure>
        </div>
        <div class="item__description">
            <p><b>Idade</b>: ${idadeZumbi} anos</p>
            <p><b>Peso</b>: ${pesoZumbi} kg</p>
            <p><b>Sexo</b>: ${sexoZumbi}</p>
            <p><b>Altura</b>: ${alturaZumbi} m</p>
            <p><b>Tipo sanguíneo</b>: ${sangueZumbi}</p>
            <p><b>Força</b>: ${forcaZumbi}</p>
            <p><b>Velocidade</b>: ${velocidadeZumbi}</p>
            <p><b>Inteligência</b>: ${inteligenciaZumbi}</p>
        </div> `;
    container_zumbis.appendChild(cardZumbi);
  };

  // Chamando a função para ser exercutada
  CarregarZumbis();