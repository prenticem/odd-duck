let duckContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.getElementById('Image3');

let clicks = 0;
let maxClicksAllowed = 25;

// State object holds the holds the current state of the application (all existing Ducks)
const state = {
  allDuckArray: [],
};

function Duck(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allDuckArray.length);
}

function renderDuck() {
  let duck1 = getRandomNumber();
  let duck2 = getRandomNumber();
  let duck3 = getRandomNumber();

  while (duck1 === duck2||duck1 === duck3||duck2 === duck3) {
    duck2 = getRandomNumber();
    duck3 = getRandomNumber();
  }
  image1.src = state.allDuckArray[duck1].src;
  image2.src = state.allDuckArray[duck2].src;
  image3.src = state.allDuckArray[duck3].src;
  image1.alt = state.allDuckArray[duck1].name;
  image2.alt = state.allDuckArray[duck2].name;
  image3.alt = state.allDuckArray[duck3].name;
  state.allDuckArray[duck1].views++;
  state.allDuckArray[duck2].views++;
  state.allDuckArray[duck3].views++;
}

function handleDuckClick(event) {
  if (event.target === duckContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickDuck = event.target.alt;
  for (let i = 0; i < state.allDuckArray.length; i++) {
    if (clickDuck === state.allDuckArray[i].name) {
      state.allDuckArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    duckContainer.removeEventListener('click', handleDuckClick);
    // give the button an event lister and styles so the user
    // knows its an active button:
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    duckContainer.className = 'no-voting';
  } else {
    renderDuck();
  }
}

function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < state.allDuckArray.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${state.allDuckArray[i].name} had ${state.allDuckArray[i].views} view and was clicked ${state.allDuckArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}

let bag = new Duck ('A bag', 'img/bag.jpg');
let bananna= new Duck('Yellow Bananna','img/banana.jpg');
let bathroom = new Duck('Bathroom', 'img/bathroom.jpg');
let boots = new Duck('Boots', 'img/boots.jpg');
let breakfast = new Duck('Breakfast','img/breakfast.jpg');
let bubblegum = new Duck('Bubblegum','img/bubblegum.jpg');
let chair = new Duck('Chair','img/chair.jpg');
let cthulhu = new Duck('Cthulhu','img/cthulhu.jpg');
let dog = new Duck('Dog','img/dog-duck.jpg');
let dragon = new Duck('Dragon','img/dragon.jpg');
let pen = new Duck('Pen','img/pen.jpg');
let pet = new Duck('Pet','img/pet-sweep.jpg');
let scissors = new Duck('Scissors','img/scissors.jpg');
let shark = new Duck('Shark', 'img/shark.jpg');
let sweep = new Duck('Sweep','img/sweep.png');
let tauntaun = new Duck('Tauntaun','img/tauntaun.jpg');
let unicorn = new Duck('Unicorn','img/unicorn.jpg');
let water = new Duck('Water', 'img/water-can.jpg');
let wine = new Duck('Wine', 'img/wine-glass.jpg');

state.allDuckArray.push(bag, bananna, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog, dragon, pen, pet, scissors, shark, sweep, tauntaun, unicorn, water, wine);

renderDuck();

duckContainer.addEventListener('click', handleDuckClick);
=======
let duckContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.getElementById('Image3');

let clicks = 0;
let maxClicksAllowed = 25;

// State object holds the holds the current state of the application (all existing Ducks)
const state = {
  allDuckArray: [],
};

function Duck(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allDuckArray.length);
}

function renderDuck() {
  let duck1 = getRandomNumber();
  let duck2 = getRandomNumber();
  let duck3 = getRandomNumber();

  while (duck1 === duck2||duck1 === duck3||duck2 === duck3) {
    duck2 = getRandomNumber();
    duck3 = getRandomNumber();
  }
  image1.src = state.allDuckArray[duck1].src;
  image2.src = state.allDuckArray[duck2].src;
  image3.src = state.allDuckArray[duck3].src;
  image1.alt = state.allDuckArray[duck1].name;
  image2.alt = state.allDuckArray[duck2].name;
  image3.alt = state.allDuckArray[duck3].name;
  state.allDuckArray[duck1].views++;
  state.allDuckArray[duck2].views++;
  state.allDuckArray[duck3].views++;
}

function handleDuckClick(event) {
  if (event.target === duckContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickDuck = event.target.alt;
  for (let i = 0; i < state.allDuckArray.length; i++) {
    if (clickDuck === state.allDuckArray[i].name) {
      state.allDuckArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    duckContainer.removeEventListener('click', handleDuckClick);
    // give the button an event lister and styles so the user
    // knows its an active button:
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    duckContainer.className = 'no-voting';
  } else {
    renderDuck();
  }
}

function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < state.allDuckArray.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${state.allDuckArray[i].name} had ${state.allDuckArray[i].views} view and was clicked ${state.allDuckArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}

let bag = new Duck ('A bag', 'img/bag.jpg');
let bananna= new Duck('Yellow Bananna','img/banana.jpg');
let bathroom = new Duck('Bathroom', 'img/bathroom.jpg');
let boots = new Duck('Boots', 'img/boots.jpg');
let breakfast = new Duck('Breakfast','img/breakfast.jpg');
let bubblegum = new Duck('Bubblegum','img/bubblegum.jpg');
let chair = new Duck('Chair','img/chair.jpg');
let cthulhu = new Duck('Cthulhu','img/cthulhu.jpg');
let dog = new Duck('Dog','img/dog-duck.jpg');
let dragon = new Duck('Dragon','img/dragon.jpg');
let pen = new Duck('Pen','img/pen.jpg');
let pet = new Duck('Pet','img/pet-sweep.jpg');
let scissors = new Duck('Scissors','img/scissors.jpg');
let shark = new Duck('Shark', 'img/shark.jpg');
let sweep = new Duck('Sweep','img/sweep.png');
let tauntaun = new Duck('Tauntaun','img/tauntaun.jpg');
let unicorn = new Duck('Unicorn','img/unicorn.jpg');
let water = new Duck('Water', 'img/water-can.jpg');
let wine = new Duck('Wine', 'img/wine-glass.jpg');

state.allDuckArray.push(bag, bananna, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog, dragon, pen, pet, scissors, shark, sweep, tauntaun, unicorn, water, wine);

renderDuck();

duckContainer.addEventListener('click', handleDuckClick);