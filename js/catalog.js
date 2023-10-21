const container_zumbis = document.querySelector(".main__container-catalog");

const url = "https://api-blackcat-defense.vercel.app/v1/zumbis";

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let zumbis = data.data;

    return zumbis.map(function (zumbi) {
      const idZumbi = zumbi.zumbi_id;
      const imageZumbi = zumbi.image;
      const idadeZumbi = zumbi.age;
      const pesoZumbi = zumbi.weight;
      const sexoZumbi = zumbi.gender;
      const alturaZumbi = zumbi.height;
      const sangueZumbi = zumbi.blood_type;
      const forcaZumbi = zumbi.strength;
      const velocidadeZumbi = zumbi.velocity;
      const inteligenciaZumbi = zumbi.intelligence;
      const cardZumbi = document.createElement("li");
      cardZumbi.classList.add("catalog__item");

      cardZumbi.innerHTML = `
        <div class="item__figure-zumbi">
        <figure>
        <img src="./imgs/zumbis/${imageZumbi}" alt="Imagem de um zumbi em pixel art."/>
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
    });
  })
  .catch(function (error) {
    console.log(error);
  });

//Páginação
// const pagination = document.querySelector(".main__pagination");
// const prevPageButton = document.querySelector(".previous");
// const nextPageButton = document.querySelector(".next");
// const pageNumbers = document.querySelector(".numbers");
// const itemsPerPage = 6;

// const zumbis = document.querySelectorAll(".catalog__item");
// const totalZumbis = zumbis.length;
// const totalPages = Math.ceil(totalZumbis / itemsPerPage);
// let currentPage = 0;

// if (totalPages <= 1 && totalZumbis <= 6) {
//   pagination.style.display = "none";
// }

// function showPage(page) {
//   for (let i = 0; i < totalZumbis; i++) {
//     zumbis[i].style.display = "none";
//   }
//   const startIndex = page * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   for (let i = startIndex; i < endIndex && i < totalZumbis; i++) {
//     zumbis[i].style.display = "flex";
//   }
// }

// function updatePagination() {
//   prevPageButton.disabled = currentPage === 0;
//   nextPageButton.disabled =
//     currentPage === Math.ceil(totalZumbis / itemsPerPage) - 1;
//   pageNumbers.innerHTML = "";
//   let startPage = Math.max(currentPage - 1, 0);
//   let endPage = Math.min(currentPage + 2, totalPages - 1);
//   for (let i = startPage; i <= endPage; i++) {
//     const pageNumber = document.createElement("button");
//     pageNumber.textContent = i + 1;
//     pageNumber.classList.add("page-number");
//     if (i === currentPage) {
//       pageNumber.classList.add("current");
//     }
//     pageNumber.addEventListener("click", () => {
//       currentPage = i;
//       showPage(currentPage);
//       updatePagination();
//     });
//     pageNumbers.appendChild(pageNumber);
//   }
//   prevPageButton.disabled = currentPage === 0;
//   nextPageButton.disabled = currentPage === totalPages - 1;
// }
// prevPageButton.addEventListener("click", () => {
//   if (currentPage > 0) {
//     currentPage--;
//     showPage(currentPage);
//     updatePagination();
//   }
// });
// nextPageButton.addEventListener("click", () => {
//   if (currentPage < Math.ceil(totalZumbis / itemsPerPage) - 1) {
//     currentPage++;
//     showPage(currentPage);
//     updatePagination();
//   }
// });
// showPage(currentPage);
// updatePagination();
