import { Album } from "./album.js";
import { photos } from "./data.js";
import { searchTitle, uniquePlaces } from "./photoTools.js";

const album = new Album(photos);
const cards = document.getElementById("cards");
const search = document.getElementById("search");
const placeSelect = document.getElementById("place");

function makeCard(photo) {
  return `<article class="card">
    <img src="${photo.src}" alt="${photo.title}">
    <h3>${photo.title}</h3>
    <p>${photo.place} · ${photo.date}</p>
    <button class="like" data-id="${photo.id}">♥ ${photo.likes}</button>
  </article>`;
}

function renderCards(list) {
  cards.innerHTML = list.map(makeCard).join("");
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
