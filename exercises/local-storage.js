/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */

/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...
// const callbackFn = (e) => {
//     const item = e.target;
//     if (Array.from(item.classList).includes('item')) {
//       if (item.style.backgroundColor === 'orange') {
//         item.style.backgroundColor = 'red';
//       } else {
//         item.style.backgroundColor = 'orange';
//       }
//     }
//   };
  
//   // Grab the container Node by id
  
//   // add the eventListener to the container Node



const cardList = document.querySelectorAll('.card');
const container = document.querySelector('.cardsContainer');
const storageFavsIdRaw = localStorage.getItem("favorites");

let updatedId = storageFavsIdRaw ? JSON.parse(storageFavsIdRaw) : [];

favBgRed(updatedId);

function favBgRed(idArray) {
    for (let i = 0; i < cardList.length; i++) {
        const cardId = parseInt(cardList[i].id);
        if (idArray.includes(cardId)) {
            cardList[i].style.backgroundColor = 'red';
        } else {
            cardList[i].style.backgroundColor = 'white';
        }
    }
}

function updateLocalStorage(idArray) {
    localStorage.setItem("favorites", JSON.stringify(idArray));
}

function handleOnClick(event) {
    const card = event.target.closest('.card');
    if (card) {
        const id = parseInt(card.id);
        if (updatedId.includes(id)) {
            const itemToRemove = updatedId.indexOf(id);
            updatedId.splice(itemToRemove, 1);
        } else {
            updatedId.push(id);
        }

        favBgRed(updatedId);
        updateLocalStorage(updatedId);
    }
}

container.addEventListener('click', handleOnClick);