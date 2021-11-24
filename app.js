// To ensure that the DOM has been fully loaded
document.addEventListener("DOMContentLoaded", () => {
    getAllCharacters();
});

const cards = document.querySelector("#cards");
const cardTemplate = document.querySelector("#cardTemplate");

const API_URL = "http://hp-api.herokuapp.com/api/characters";

const getAllCharacters = async () => {
    try {
        const res = await fetch(API_URL);
        const characters = await res.json();
        console.log(characters);

    } catch (error) {
        console.log(error);

    } finally {
        console.log('End of Request');
    }
}
