import { Album } from "./album.js";
import { photos } from "./data.js";
import { searchTitle, uniquePlaces } from "./photoTools.js";

const album = new Album(photos);
const cards = document.getElementById("cards");
const search = document.getElementById("search");
const placeSelect = document.getElementById("place");
const count = document.getElementById("count");

function makeCard(photo) {
  return `<article class="card">
    <img src="${photo.src}" alt="${photo.title}" loading="lazy">
    <div class="card__body">
      <span class="card__tag">${photo.place}</span>
      <h3>${photo.title}</h3>
      <p>${photo.date.replaceAll("-", ".")}</p>
      <button class="like" data-id="${photo.id}" aria-label="${photo.title} таалагдлаа">♥ ${photo.likes}</button>
    </div>
  </article>`;
}

function renderCards(list) {
  cards.innerHTML = list.length
    ? list.map(makeCard).join("")
    : `<p class="empty">Тохирох зураг олдсонгүй. Өөр үгээр хайгаад үзээрэй.</p>`;
  count.textContent = `${list.length} зураг`;
}

function currentList() {
  let list = searchTitle(album.photos, search.value);
  if (placeSelect.value !== "") {
    list = list.filter((p) => p.place === placeSelect.value);
  }
  return list;
}

uniquePlaces(album.photos).forEach((place) => {
  placeSelect.innerHTML += `<option value="${place}">${place}</option>`;
});

cards.addEventListener("click", (event) => {
  const id = Number(event.target.dataset.id);
  if (event.target.classList.contains("like")) {
    album.like(id);
    renderCards(currentList());
  }
});

search.addEventListener("input", () => renderCards(currentList()));
placeSelect.addEventListener("change", () => renderCards(currentList()));

renderCards(currentList());
