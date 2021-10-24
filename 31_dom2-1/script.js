const spottedAnimalsList = document.getElementById("spotted-animals-list");

const bigFiveButton = document.querySelectorAll(".big-five-button");
bigFiveButton.forEach(e => {
    e.addEventListener("click", () => {
        addSpottedAnimal(e.textContent);
    })
})

const addSpottedAnimal = animal => {
    const addListItem = document.createElement("li");
    addListItem.classList.add("spotted-animals-list-item")
    spottedAnimalsList.appendChild(addListItem).innerHTML=animal;
}

const removeFirstItem = document.getElementById("remove-first-item-button");
removeFirstItem.addEventListener("click", () => {
    if(spottedAnimalsList.hasChildNodes){
        spottedAnimalsList.removeChild(spottedAnimalsList.firstElementChild);
        console.log("removed child")
    }
})

const removeAll = document.getElementById("remove-all-button");
removeAll.addEventListener("click", () => {
    while(spottedAnimalsList.firstChild) {
        spottedAnimalsList.removeChild(spottedAnimalsList.lastChild);
    }
})