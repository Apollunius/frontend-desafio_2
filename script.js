// const { hidden } = require("chalk");

const banner = document.querySelector(".desconto");
const count = document.querySelector(".count");
const cupom = document.querySelector(".cupom");
const topMovies = document.querySelector(".topmovies");
const cards = document.querySelector(".cards");
const star1 = document.querySelectorAll(".star");
const info = document.querySelectorAll(".info");
let all = document.querySelector(".allmovies > .cards");
const bag = document.querySelector(".bag");
const btnGenre = document.querySelectorAll(".btnGenre");
const btnPrice = document.querySelectorAll(".btnPrice");
const allMovies = document.querySelector(".allmovies");

function criadorDeCards(repetidor) {
  fetch(
    "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR"
  )
    .then((resposta) => {
      return resposta.json();
    })
    .then((respostaJson) => {
      const movies = respostaJson.results;
      if (repetidor === 20) {
        const newAll = document.createElement("div");
        newAll.setAttribute("class", "cards");
        allMovies.append(newAll);
      }
      for (x = 0; x < repetidor; x++) {
        const newCard = document.createElement("div");
        const star1 = document.createElement("div");
        const imgStar1 = document.createElement("img");
        const div = document.createElement("div");
        const info = document.createElement("div");
        const title = document.createElement("div");
        const star2 = document.createElement("div");
        const imgStar2 = document.createElement("img");
        const vote = document.createElement("span");
        const btnPrice = document.createElement("button");
        const span = document.createElement("span");
        const price = document.createElement("span");

        newCard.classList.add("card");
        newCard.style["background-image"] =
          "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(" +
          movies[x].poster_path +
          ")";

        star1.classList.add("star1");
        imgStar1.setAttribute("src", "./images/Star 2.png");

        info.classList.add("info");
        title.classList.add("title");
        if (movies[x].title.length > 12) {
          title.innerText = movies[x].title.substr(0, 12).padEnd(15, ".");
        } else {
          title.innerText = movies[x].title;
        }

        star2.classList.add("star2");
        imgStar2.setAttribute("src", "./images/Star 1.png");

        vote.innerText = movies[x].vote_average;

        btnPrice.classList.add("btnPrice");
        span.innerText = "Sacola";
        price.classList.add("price");
        if (movies[x].price.toString().includes(".")) {
          price.innerText =
            "R$ " + movies[x].price.toString().replace(".", ",") + "0";
          teste = movies[x].price
        } else {
          price.innerText = "R$ " + movies[x].price.toString() + ",00";
          teste = movies[x].price
        }

        btnPrice.append(span);
        btnPrice.append(price);
        star2.append(imgStar2);
        star2.append(vote);
        info.append(title);
        info.append(star2);
        div.append(info);
        star1.append(imgStar1);
        newCard.append(star1);
        newCard.append(div);
        if (repetidor === 5) {
          cards.append(newCard);
          div.append(btnPrice);
        } else {
          all = document.querySelector(".allmovies > .cards");
          all.append(newCard);
          div.append(btnPrice);
        }
        btnPrice.addEventListener("click", () => {
          if(document.querySelector(".bag > h2").innerText === "A Sacola está vazia"){
          document.querySelector(".bag > h2").remove()
          document.querySelector(".bag > h4").remove()
          document.querySelector(".bag > img").remove()


          bag.innerHTML = `<a class="headBag"><img src="./images/Bag.png" /> Sacola</a>
           <div style="display: flex; justify-content: space-around; width: 100%; align-items: center;">
          <img src="./images/Social Media.png" style="width: 43px; height: 67px;">
          <div style="display: flex; justify-content: space-around;">
              <div class="nome"> Joker </div>
              <div class="preco">R$ 7,95</div>
          </div>
          <div class="qtd">
              <button style="background-image: url(./images/menos.png);" class="plus"></button> <span>0</span> <button class="less"></button>
          </div>
      </div>
          <div style="align-self: flex-start; margin: 0 0 1em 1em;">Insira seu cupom<br>
              <div class="boxdesconto"><input placeholder="Cupom de Desconto" class="cupom" /><img
                      src="./images/Ticket.png" /></div>
          </div>`
}
        })
      }

    });
}

function changeGenre(id) {
  let link =
    "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?with_genres=<id do gênero>&language=pt-BR";
  let changedId = link.replace("<id do gênero>", id);

  fetch(changedId)
    .then((resposta) => {
      return resposta.json();
    })
    .then((respostaJson) => {
      const id = respostaJson.results;
      // all.style.display = 'none'
      document.querySelector(".allmovies > .cards").remove();

      const all = document.createElement("div");
      all.classList.add("cards");
      for (x = 0; x < 20; x++) {
        const newCard = document.createElement("div");
        const star1 = document.createElement("div");
        const imgStar1 = document.createElement("img");
        const div = document.createElement("div");
        const info = document.createElement("div");
        const title = document.createElement("div");
        const star2 = document.createElement("div");
        const imgStar2 = document.createElement("img");
        const vote = document.createElement("span");
        const btnPrice = document.createElement("button");
        const span = document.createElement("span");
        const price = document.createElement("span");

        newCard.classList.add("card");
        newCard.style["background-image"] =
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(" +
          id[x].poster_path +
          ")";

        star1.classList.add("star1");
        imgStar1.setAttribute("src", "./images/Star 2.png");

        info.classList.add("info");
        title.classList.add("title");
        if (id[x].title.length > 12) {
          title.innerText = id[x].title.substr(0, 12).padEnd(15, ".");
        } else {
          title.innerText = id[x].title;
        }
        star2.classList.add("star2");
        imgStar2.setAttribute("src", "./images/Star 1.png");

        vote.innerText = id[x].vote_average;

        btnPrice.classList.add("btnPrice");
        span.innerText = "Sacola";
        price.classList.add("price");
        if (id[x].price.toString().includes(".")) {
          price.innerText =
            "R$ " + id[x].price.toString().replace(".", ",") + "0";
        } else {
          price.innerText = "R$ " + id[x].price.toString() + ",00";
        }

        btnPrice.append(span);
        btnPrice.append(price);
        star2.append(imgStar2);
        star2.append(vote);
        info.append(title);
        info.append(star2);
        div.append(info);
        star1.append(imgStar1);
        newCard.append(star1);
        newCard.append(div);
        allMovies.append(all);
        all.append(newCard);
        div.append(btnPrice);
      }
      console.log(btnPrice)
    });
}
criadorDeCards(5);
criadorDeCards(20);
btnGenre[0].addEventListener("click", () => {
  document.querySelector(".allmovies > .cards").remove();
  criadorDeCards(20);
});
btnGenre[1].addEventListener("click", () => {
  changeGenre(28);
});
btnGenre[2].addEventListener("click", () => {
  changeGenre(10749);
});
btnGenre[3].addEventListener("click", () => {
  changeGenre(878);
});
btnGenre[4].addEventListener("click", () => {
  changeGenre(27);
});


let m = 5,
  s = 0;
function timer() {
  if (m > 0 || s > 0) {
    if (s == 0) {
      s = 59;
      m = m - 1;
    } else {
      s = s - 1;
    }
    if (m.toString().length == 1) {
      m = "0" + m;
    }
    if (s.toString().length == 1) {
      s = "0" + s;
    }
    count.innerHTML = m + ":" + s;
    setTimeout("timer()", 1000);
  } else {
    document.querySelector(".desconto").style.display = "none";
  }
}


timer();
banner.addEventListener("click", () => {
  document.querySelector(".desconto").style.display = "none";
  cupom.value = "HTMLNAOELINGUAGEM";
});
