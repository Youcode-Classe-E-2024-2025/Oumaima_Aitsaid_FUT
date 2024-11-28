const openform = document.getElementById("openModal");
const closeform = document.getElementById("closeModal");
const playerform = document.getElementById("playerModal");
const formPlayersDisplay = document.getElementById("modalPlayersDisplay");
fetch('players.json')
  .then(response => response.json())
  .then(data => {
    if (!localStorage.getItem('players')) {
      localStorage.setItem('players', JSON.stringify(data));
      console.log('Players loaded:', data);
    }
  })
  .catch(error => console.error('Error:', error));

document.getElementById("addPlayerForm").addEventListener("submit", function (e) {
  e.preventDefault();

 // validate for with regix


  const regexname = /^[A-Za-z\s]+$/;
  const regexurl = /^https?:\/\/.*$/;

  if (!regexname.test(name)) {
    alert("Player name can only contain letters and spaces.");
    return;
  }

  if (!regexname.test(nationality)) {
    alert("Nationality can only contain letters and spaces.");
    return;
  }

  if (!regexurl.test(photo)) {
    alert("Please enter a valid photo URL.");
    return;
  }

  if (!regexurl.test(logo)) {
    alert("Please enter a valid logo URL.");
    return;
  }

  if (!regexurl.test(flag)) {
    alert("Please enter a valid flag URL.");
    return;
  }

  if (pace < 0 || pace > 100) {
    alert("Pace must be between 0 and 100.");
    return;
  }

  if (shooting < 0 || shooting > 100) {
    alert("Shooting must be between 0 and 100.");
    return;
  }

  if (dribbling < 0 || dribbling > 100) {
    alert("dribbling must be between 0 and 100.")
  }

  if (defending < 0 || defending > 100) {
    alert("defending must be between 0 and 100.")
  }

  if (physical < 0 || physical > 100) {
    alert("physical must be between 0 and 100.")
  }

  const newPlayer = {
    name: document.getElementById("name").value,
    photo: document.getElementById("photo").value,
    position: document.getElementById("position").value,
    nationality: document.getElementById("nationality").value,
    flag: document.getElementById("flag").value,
    club: document.getElementById("club").value,
    logo: document.getElementById("logo").value,
    rating: Number(document.getElementById("rating").value),
    pace: Number(document.getElementById("pace").value),
    shooting: Number(document.getElementById("shooting").value),
    passing: Number(document.getElementById("passing").value),
    dribbling: Number(document.getElementById("dribbling").value),
    defending: Number(document.getElementById("defending").value),
    physical: Number(document.getElementById("physical").value),
  };

  const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };

  playersData.players.push(newPlayer);

  localStorage.setItem("players", JSON.stringify(playersData));


  document.getElementById("addPlayerForm").reset();

});


function SeeAllplayer() {
  const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };
  formPlayersDisplay.innerHTML = "";
  playersData.players.forEach((player, index) => {
    const playerCard = document.createElement("div");
    playerCard.classList.add(
      "border",
      "border-gray-300",
      "rounded",
      "p-4",
      "bg-gray-50",
      "shadow-sm",
      "text-center"
    );
    playerCard.innerHTML = `
      <img class="w-24 h-24 mx-auto rounded-full" src="${player.photo}" alt="${player.name}">
      <h3 class="text-lg font-semibold mt-2">${player.name}</h3>
      <p class="text-sm text-gray-600">Position: ${player.position}</p>
      <p class="text-sm text-gray-600">Rating: ${player.rating}</p>
      <p class="text-sm text-gray-600">Nationality: ${player.nationality}</p>
        
    `;
    formPlayersDisplay.appendChild(playerCard);
  });
}


openform.addEventListener("click", () => {
  SeeAllplayer();
  playerform.classList.remove("hidden");
});


closeform.addEventListener("click", () => {
  playerform.classList.add("hidden");
});

playerform.addEventListener("click", (e) => {
  if (e.target === playerform) {
    playerform.classList.add("hidden");
  }
});


