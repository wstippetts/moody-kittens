let kitten = {};
let kittens = [];
/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten(event) {
  // prevent the screen from reloading
    event.preventDefault();
    // save form values to reusable kitten name variable
    let form = event.target;
    // 
    let kittenName = form.name.value;
    if(kittenName === ''){
        alert("Error, try again stupid!");
        return;
    }
    kitten = kittens.find(kitten => kitten.name.toLowerCase() == kittenName.toLowerCase());

    if(!kitten){
      kitten = {
        id: generateId(), 
        name: kittenName, 
        mood: "angry", 
        alive: true, 
        kittenPic: "moody-logo.png"
      }
      kittens.push(kitten);
    }
    form.reset();
    saveKittens();
}

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens 
 */
function saveKittens() {
  window.localStorage.setItem("kittens", JSON.stringify(kittens));
  drawKittens();
}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens() {
  let kittenStorage = window.localStorage.getItem("kittens");
  if(kittenStorage){
    kittens = kittenStorage;
  }
  drawKittens();
}

/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens() {
  let kitCard = '';

  kittens.forEach(kitten => kitCard += `
  <h1>${kitten.name}</h1>
  <img class="kitten happy" src="${kitten.kittenPic}">
  `);

  document.getElementById("kittens").innerHTML = kitCard;
}


/**
 * Find the kitten in the array by its id
 * @param {string} id 
 * @return {Kitten}
 */
function findKittenById(id) {
}


/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .5 
 * increase the kittens affection
 * otherwise decrease the affection
 * @param {string} id 
 */
function pet(id) {
}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * @param {string} id
 */
function catnip(id) {
}

/**
 * Sets the kittens mood based on its affection
 * @param {Kitten} kitten 
 */
function setKittenMood(kitten) {
}

/**
 * Removes all of the kittens from the array
 * remember to save this change
 */
function clearKittens(){
}

/**
 * Removes the welcome content and should probably draw the 
 * list of kittens to the page. Good Luck
 */
function getStarted() {
  document.getElementById("welcome").remove();
  console.log('Good Luck, Take it away')
}


// --------------------------------------------- No Changes below this line are needed

/**
 * Defines the Properties of a Kitten
 * @typedef {{name: string, mood: string, affection: number}} Kitten
 */


/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}

loadKittens();