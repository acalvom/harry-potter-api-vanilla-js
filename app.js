// To ensure that the DOM has been fully loaded
document.addEventListener("DOMContentLoaded", () => {
    getAllCharacters();
});

const API_URL = "http://hp-api.herokuapp.com/api/characters/students";

const getAllCharacters = async () => {
    try {
        const res = await fetch(API_URL);
        const characters = await res.json();
        drawCards(characters);

    } catch (error) {
        console.log(error);

    } finally {
        console.log('End of Request');
    }
}

const drawCards = (characters) => {
    const cards = document.querySelector("#cards");
    const cardTemplate = document.querySelector("#cardTemplate");
    const fragment = document.createDocumentFragment();

    characters.forEach(item => {
        const clone = cardTemplate.content.cloneNode(true); // Good practise is to clen the node
        clone.querySelector("h5").textContent = item.name; // Select the element h5 only from the template
        clone.querySelector("p").textContent = item.house + ' - ' + item.gender;
        fragment.appendChild(clone)
    });
    cards.appendChild(fragment);
}