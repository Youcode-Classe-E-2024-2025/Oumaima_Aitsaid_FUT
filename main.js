const openform = document.getElementById("openModal");
const closeform = document.getElementById("closeModal");
const playerform = document.getElementById("playerModal");
const formPlayersDisplay = document.getElementById("modalPlayersDisplay");
const playerDetaillsOnCard = document.getElementById("playerDetaillsOnCard");

//fetch json
fetch('players.json')
  .then(response => response.json())
  .then(data => {
    if (!localStorage.getItem('players')) {
      localStorage.setItem('players', JSON.stringify(data));
      console.log('Players loaded:', data);
    }
  })
  .catch(error => console.error('Error:', error));

  //fnt add player
document.getElementById("addPlayerForm").addEventListener("submit", function (e) {
  e.preventDefault();

 // validate for with regix


//   let regexname = /^[A-Za-z\s]+$/;
//  let regexurl = /^https?:\/\/.*$/;

//   if (!regexname.test(name)) {
//     alert("Player name can only contain letters and spaces");
//     return;
//   }

//   if (!regexname.test(nationality)) {
//     alert("Nationality can only contain letters and spaces.");
//     return;
//   }

//   if (!regexurl.test(photo)) {
//     alert("Please enter a valid photo ");
//     return;
//   }

//   if (!regexurl.test(logo)) {
//     alert("Please enter a valid logo URL");
//     return;
//   }

//   if (!regexurl.test(flag)) {
//     alert("Please enter a valid flag url");
//     return;
//   }

//   if (pace < 0 || pace > 100) {
//     alert("Pace must be between 0 and 100");
//     return;
//   }

//   if (shooting < 0 || shooting > 100) {
//     alert("Shooting must be between 0 and 100");
//     return;
//   }

//   if (dribbling < 0 || dribbling > 100) {
//     alert("dribbling must be between 0 and 100")
//   }

//   if (defending < 0 || defending > 100) {
//     alert("defending must be between 0 and 100")
//   }

//   if (physical < 0 || physical > 100) {
//     alert("physical must be between 0 and 100")
//   }

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
//local storage
  const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };

  playersData.players.push(newPlayer);

  localStorage.setItem("players", JSON.stringify(playersData));
  document.getElementById("addPlayerForm").reset();

});

//Fnct seeAll Player
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
      "bg-gray-96",
      "shadow-sm",
      "text-center"
    );
    playerCard.innerHTML = `
      <img class="w-24 h-24 mx-auto rounded-full" src="${player.photo}" alt="${player.name}">
      <h3 class="text-lg text-black font-semibold mt-2">${player.name}</h3>
      <p class="text-sm text-black">Position: ${player.position}</p>
      <p class="text-sm text-black">Rating: ${player.rating}</p>
      <p class="text-sm text-black">Nationality: ${player.nationality}</p>
         <button 
        class="mt-3 bg-yellow-500 text-white text-sm py-1 px-3 rounded hover:bg-yellow-600 transition"
        onclick="removePlayer(${index})"
      >
        Remove
      </button>
      <button 
        class="mt-3 bg-yellow-500 text-white text-sm py-1 px-3 rounded hover:bg-yellow-600 transition"
        onclick="editPlayer(${index})"
      >
        Edit
      </button>
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
//fucntion remove player

window.removePlayer = function (index) {
    const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };
    playersData.players.splice(index, 1);
    localStorage.setItem("players", JSON.stringify(playersData));
    console.log(playersData.players)
    SeeAllplayer();
  }

//get element By id edit Player
const editPlayerFormModal = document.getElementById("editPlayerForm");
const closeEditForm = document.getElementById("closeEditForm");
const editForm = document.getElementById("editPlayerForm");
//fuct edit player
window.editPlayer = function (index) {
  const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };
  const player = playersData.players[index];
  document.getElementById("editName").value = player.name;
  document.getElementById("editPosition").value = player.position;
  document.getElementById("editNationality").value = player.nationality;
  document.getElementById("editPhoto").value = player.photo;
  document.getElementById("editFlag").value = player.flag;
  document.getElementById("editLogo").value = player.logo;
  document.getElementById("editRating").value = player.rating;
  document.getElementById("editPace").value = player.pace;
  document.getElementById("editShooting").value = player.shooting;
  document.getElementById("editDribbling").value = player.dribbling;
  document.getElementById("editDefending").value = player.defending;
  document.getElementById("editPhysical").value = player.physical;
  editPlayerFormModal.classList.remove("hidden");
  
  editForm.onsubmit = function (e) {
    e.preventDefault();
    playersData.players[index] = {
      name: document.getElementById("editName").value,
      position: document.getElementById("editPosition").value,
      nationality: document.getElementById("editNationality").value,
      photo: document.getElementById("editPhoto").value,
      flag: document.getElementById("editFlag").value,
      logo: document.getElementById("editLogo").value,
      rating: Number(document.getElementById("editRating").value),
      pace: Number(document.getElementById("editPace").value),
      shooting: Number(document.getElementById("editShooting").value),
      dribbling: Number(document.getElementById("editDribbling").value),
      defending: Number(document.getElementById("editDefending").value),
      physical: Number(document.getElementById("editPhysical").value),
    };
  
  let nameEdit = document.getElementById("editName").value;
  let positionEdit = document.getElementById("editPosition").value;
  let nationalityEdit = document.getElementById("editNationality").value;
  let photoUrlEdit = document.getElementById("editPhoto").value;
  let flagUrlEdit = document.getElementById("editFlag").value;
  let logoUrlEdit = document.getElementById("editLogo").value;
  let ratingEdit = document.getElementById("editRating").value;
  let paceEdit = document.getElementById("editPace").value;
  let shootingEdit = document.getElementById("editShooting").value;
  let dribblingEdit = document.getElementById("editDribbling").value;
  let defendingEdit = document.getElementById("editDefending").value;
  let physicalEdit = document.getElementById("editPhysical").value;


  let nameRegex = /^[a-zA-Z\s]+$/;  
  let positionRegex = /^(ST|LM|CM|RM|LB|RB|GK)$/;  
  let nationalityRegex = /^[a-zA-Z\s]+$/;  
  let urlRegex = /^https?:\/\/.*$/;  

  
  let numberRangeRegex = /^(?:100|[1-9]?\d)$/;

  
  if (!nameRegex.test(nameEdit)) {
    alert("Invalid player name. Only letters and spaces are allowed.");
    return;
  }

  if (!positionRegex.test(positionEdit)) {
    alert(" choice just ST or LM or CM or RM or LB or RB or GK");
    return;
  }

  if (!nationalityRegex.test(nationalityEdit)) {
    alert("Invalid nationality. Only letters and spaces are allowed.");
    return;
  }

  if (!urlRegex.test(photoUrlEdit)) {
    alert("Invalid photo URL. It should point to a valid image (JPG, JPEG, PNG, GIF).");
    return;
  }

  if (!urlRegex.test(flagUrlEdit)) {
    alert("Invalid flag URL. It should point to a valid image (JPG, JPEG, PNG, GIF).");
    return;
  }

  if (!urlRegex.test(logoUrlEdit)) {
    alert("Invalid logo URL. It should point to a valid image (JPG, JPEG, PNG, GIF).");
    return;
  }

  if (!numberRangeRegex.test(ratingEdit) || ratingEdit < 1 || ratingEdit > 100) {
    alert("Invalid rating. It should be a number between 1 and 100.");
    return;
  }

  if (!numberRangeRegex.test(paceEdit) || paceEdit < 0 || paceEdit > 100) {
    alert("Invalid pace. It should be a number between 0 and 100.");
    return;
  }

  if (!numberRangeRegex.test(shootingEdit) || shootingEdit < 0 || shootingEdit > 100) {
    alert("Invalid shooting. It should be a number between 0 and 100.");
    return;
  }

  if (!numberRangeRegex.test(dribblingEdit) || dribblingEdit < 0 || dribblingEdit > 100) {
    alert("Invalid dribbling. It should be a number between 0 and 100.");
    return;
  }

  if (!numberRangeRegex.test(defendingEdit) || defendingEdit < 0 || defendingEdit > 100) {
    alert("Invalid defending. It should be a number between 0 and 100.");
    return;
  }

  if (!numberRangeRegex.test(physicalEdit) || physicalEdit < 0 || physicalEdit > 100) {
    alert("Invalid physical. It should be a number between 0 and 100.");
    return;
  }




    localStorage.setItem("players", JSON.stringify(playersData));
    SeeAllplayer();
    editPlayerFormModal.classList.add("hidden");
    displayPlayersInModal(); 
  };
}
//close formul edit
closeEditForm.addEventListener("click", () => {
  editPlayerFormModal.classList.add("hidden");
});
const playerlistContainer = document.querySelector('.playerlistContainer');
const playerlist = document.getElementById('playerlist');
