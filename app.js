const items = [
  "vela",
  "dragon",
  "espada",
  "trono",
  "guitarra",
  "buho",
  "rana",
  "payaso",
  "reloj",
  "espada",
  "raton",
  "casco de caballero",
  "tesoro"
];

let alreadyChosen = [];

// Function takes array and filters for subset
function filterItems(array) {
  let filtered = array.filter(function (item) {
    return !alreadyChosen.includes(item);
  });
  return filtered;
}

function getRandomItem() {
  if (alreadyChosen.length === items.length) {
    alreadyChosen = [];
    document.querySelector("button").innerHTML = "Next item";
  }
  const filteredItems = filterItems(items);
  const randomIndex = Math.floor(Math.random() * filteredItems.length);
  alreadyChosen.push(filteredItems[randomIndex]);
  console.log(alreadyChosen, filteredItems);
  document.getElementById("randomItem").innerHTML = filteredItems[randomIndex];
  document.getElementById("alreadyChosen").innerHTML = alreadyChosen.join(", ");
  if (alreadyChosen.length === items.length) {
    document.querySelector("button").innerHTML = "Play Again";
  }
}
