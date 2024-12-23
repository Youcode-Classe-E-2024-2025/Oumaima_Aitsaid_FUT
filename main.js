const openform = document.getElementById("openModal");
const closeform = document.getElementById("closeModal");
const playerform = document.getElementById("playerModal");
const formPlayersDisplay = document.getElementById("modalPlayersDisplay");
const playerDetaillsOnCard = document.getElementById("playerDetaillsOnCard");
const addPlayerForm =document.getElementById("addPlayerForm")

//fetch json
fetch('players.json')
  .then(response => response.json())
  .then(data => {
    if (!localStorage.getItem('players')) {
      localStorage.setItem('players', JSON.stringify(data));
    }
  })
  .catch(error => console.error('Error:', error));
  
const regularPlayerInputs = document.getElementById('regularPlayerInputs');
const GKinputs = document.getElementById('GKinputs');
const regularPlayerInputsEdit = document.getElementById('regularPlayerInputsEdit');
const GKinputsEdit = document.getElementById('GKinputsEdit');
console.log(regularPlayerInputs)
const position = document.getElementById("position")


position.addEventListener("change", function (event) {

  if (position.value == "GK") {
    regularPlayerInputs.classList.add("hidden")
    GKinputs.classList.remove("hidden")
  }
  else {
    regularPlayerInputs.classList.remove("hidden")
    GKinputs.classList.add("hidden")
  }

})


//fnt add player
addPlayerForm.addEventListener("submit", function (e) {
  e.preventDefault();

 
  let name =document.getElementById("name").value
 
  let photo = document.getElementById("photo").value;
  let position = document.getElementById("position").value;
  let nationality = document.getElementById("nationality").value;
  let flag = document.getElementById("flag").value;
  let club = document.getElementById("club").value;
  let logo = document.getElementById("logo").value;
    let regexname = /^[A-Za-z\s]+$/;
   let regexurl = /^https?:\/\/.*$/;

    if (!regexname.test(name)) {
      alert("Player name can only contain letters and spaces");
      return;
    }

    if (!regexname.test(nationality)) {
      alert("Nationality can only contain letters and spaces.");
      return;
    }

    if (!regexurl.test(photo)) {
      alert("Please enter a valid photo ");
      return;
    }

    if (!regexurl.test(logo)) {
      alert("Please enter a valid logo URL");
      return;
    }

    if (!regexurl.test(flag)) {
      alert("Please enter a valid flag url");
      return;
    }

    if (pace < 0 || pace > 100) {
      alert("Pace must be between 0 and 100");
      return;
    }

    if (shooting < 0 || shooting > 100) {
      alert("Shooting must be between 0 and 100");
      return;
    }

    if (dribbling < 0 || dribbling > 100) {
      alert("dribbling must be between 0 and 100")
    }

    if (defending < 0 || defending > 100) {
      alert("defending must be between 0 and 100")
    }

    if (physical < 0 || physical > 100) {
      alert("physical must be between 0 and 100")
    }


  let newPlayer = {
    name: name,
    photo: photo,
    position: position,
    nationality: nationality,
    flag: flag,
    club: club,
    logo: logo,
  };
  const regularPayerStatistic = {
    rating: Number(document.getElementById("rating").value),
    pace: Number(document.getElementById("pace").value),
    shooting: Number(document.getElementById("shooting").value),
    passing: Number(document.getElementById("passing").value),
    dribbling: Number(document.getElementById("dribbling").value),
    defending: Number(document.getElementById("defending").value),
    physical: Number(document.getElementById("physical").value),
  }

  const GKPlayerStatistic = {
    rating: Number(document.getElementById("ratingGK").value),
    diving: Number(document.getElementById("diving").value),
    handling: Number(document.getElementById("handling").value),
    kicking: Number(document.getElementById("kicking").value),
    reflexes: Number(document.getElementById("reflexes").value),
    speed: Number(document.getElementById("speed").value),
    positioning: Number(document.getElementById("positioning").value),
  }
//spred operation
  if (position.value == "GK") newPlayer = { ...newPlayer, ...GKPlayerStatistic }
  else newPlayer = { ...newPlayer, ...regularPayerStatistic }

  //local storage
  const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };

  playersData.players.push(newPlayer);

  localStorage.setItem("players", JSON.stringify(playersData));
  console.log(document.getElementById("addPlayerForm"));

  document.getElementById("photo").value = ""
  document.getElementById("name").value = ""
  document.getElementById("position").value = ""
  document.getElementById("nationality").value = ""
  document.getElementById("flag").value = ""
  document.getElementById("club").value = ""
  document.getElementById("logo").value = ""
  document.getElementById("rating").value = ""
  document.getElementById("pace").value = ""
  document.getElementById("shooting").value = ""
  document.getElementById("passing").value = ""
  document.getElementById("dribbling").value = ""
  document.getElementById("defending").value = ""
  document.getElementById("physical").value = ""
  document.getElementById("ratingGK").value = ""
  document.getElementById("diving").value = ""
  document.getElementById("handling").value = ""
  document.getElementById("kicking").value = ""
  document.getElementById("reflexes").value = ""
  document.getElementById("speed").value = ""
  document.getElementById("positioning").value = ""
  modalContainer.classList.toggle('hidden');
  document.body.classList.toggle('page-opacity');
  
})


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
      <h3 class="text-lg text-white font-semibold mt-2">${player.name}</h3>
      <p class="text-sm text-white">Position: ${player.position}</p>
      <p class="text-sm text-white">Rating: ${player.rating}</p>
      <p class="text-sm text-white">Nationality: ${player.nationality}</p>
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
    document.getElementById("editNationality").value = player.nationality;
    document.getElementById("editPhoto").value = player.photo;
    document.getElementById("editFlag").value = player.flag;
    document.getElementById("editLogo").value = player.logo;

    editPlayerFormModal.classList.remove("hidden");

    editForm.onsubmit = function (e) {
      e.preventDefault();
      playersData.players[index] = {
        name: document.getElementById("editName").value,
        nationality: document.getElementById("editNationality").value,
        photo: document.getElementById("editPhoto").value,
        flag: document.getElementById("editFlag").value,
        logo: document.getElementById("editLogo").value,

      };

      let nameEdit = document.getElementById("editName").value;
      let nationalityEdit = document.getElementById("editNationality").value;
      let photoUrlEdit = document.getElementById("editPhoto").value;
      let flagUrlEdit = document.getElementById("editFlag").value;
      let logoUrlEdit = document.getElementById("editLogo").value;



      let nameRegex = /^[a-zA-Z\s]+$/;
      let nationalityRegex = /^[a-zA-Z\s]+$/;
      let urlRegex = /^https?:\/\/.*$/;


      if (!nameRegex.test(nameEdit)) {
        alert("Invalid player name. Only letters and spaces are allowed.");
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
  const addForm = document.getElementById('addForm');
  const modalContainer = document.querySelector('.modalContainer');
  const closeAdd = document.getElementById('closeAdd');
  function addPlayer() {
    modalContainer.classList.toggle('hidden');
    document.body.classList.toggle('page-opacity');
  }


  let selectedPlayers = [];
  function addPlayerCard(filterPosition = null, index = null) {
    

    playerlistContainer.classList.toggle('hidden')
    const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };
    const playersToDisplay = filterPosition
      ? playersData.players.filter(player => player.position === filterPosition)
      : playersData.players;

    playerDetaillsOnCard.innerHTML = "";
    playersToDisplay.forEach((player) => {
      let statistic2 ;
      let statistic;


    if(player.position == "GK") statistic = ` <div class="flex justify-around text-center mt-[2px] p-2 gap-1 text-xs w-36 ">
  <div class="flex flex-col  hidden sm:block  items-center">
    <span>PAC</span>
    <span>${player.rating}</span>
  </div>
  <div class=" hidden sm:block  md:block items-center">
    <span >SHO</span>
    <span>${player.diving}</span>
  </div>
  <div class="  hidden sm:block  md:block  items-center">
    <span >PAS</span>
    <span>${player.handling}</span>
  </div>
  <div class="flex flex-col hidden sm:block   items-center">
    <span >DRI</span>
    <span>${player.kicking}</span>
  </div>
  <div class="flex flex-col hidden sm:block   items-center">
    <span >DEF</span>
    <span>${player.reflexes}</span>
  </div>
  <div class="flex flex-col hidden sm:block  items-center">
    <span >PHY</span>
    <span>${player.speed}</span>
  </div>
</div>`
else statistic = ` <div class="flex justify-around text-center mt-[2px] p-2 gap-1 text-xs w-36 ">
  <div class="flex flex-col  hidden sm:block  items-center">
    <span>PAC</span>
    <span>${player.pace}</span>
  </div>
  <div class=" hidden sm:block  md:block items-center">
    <span >SHO</span>
    <span>${player.shooting}</span>
  </div>
  <div class="  hidden sm:block  md:block  items-center">
    <span >PAS</span>
    <span>${player.passing}</span>
  </div>
  <div class="flex flex-col hidden sm:block   items-center">
    <span >DRI</span>
    <span>${player.dribbling}</span>
  </div>
  <div class="flex flex-col hidden sm:block   items-center">
    <span >DEF</span>
    <span>${player.defending}</span>
  </div>
  <div class="flex flex-col hidden sm:block  items-center">
    <span >PHY</span>
    <span>${player.physical}</span>
  </div>
</div>`
if(player.position == "GK") statistic2 =` <div class="flex justify-around text-center   gap-0.5 text-[6px] -ml-1 ">
      <div class="flex flex-col hidden sm:block items-center">
        <span>PAC</span>
        <span>${player.rating}</span>
      </div>
      <div class="flex flex-col hidden sm:block items-center">
        <span>SHO</span>
        <span>${player.diving}</span>
      </div>
      <div class="flex flex-col hidden sm:block  items-center">
        <span>PAS</span>
        <span>${player.handling}</span>
      </div>
      <div class="flex flex-col hidden sm:block items-center">
        <span>DRI</span>
        <span>${player.kicking}</span>
      </div>
      <div class="flex flex-col hidden sm:block items-center">
        <span>DEF</span>
        <span>${player.reflexes}</span>
      </div>
      <div class="flex flex-col hidden sm:block items-center">
        <span>PHY</span>
        <span>${player.speed}</span>
      </div>
    </div>`
    else statistic2 = ` <div class="flex justify-around text-center   gap-0.5 text-[6px] -ml-1 ">
      <div class="flex flex-col hidden sm:block items-center">
        <span>PAC</span>
        <span>${player.pace}</span>
      </div>
      <div class="flex flex-col hidden sm:block items-center">
        <span>SHO</span>
        <span>${player.shooting}</span>
      </div>
      <div class="flex flex-col hidden sm:block  items-center">
        <span>PAS</span>
        <span>${player.passing}</span>
      </div>
      <div class="flex flex-col hidden sm:block items-center">
        <span>DRI</span>
        <span>${player.dribbling}</span>
      </div>
      <div class="flex flex-col hidden sm:block items-center">
        <span>DEF</span>
        <span>${player.defending}</span>
      </div>
      <div class="flex flex-col hidden sm:block items-center">
        <span>PHY</span>
        <span>${player.physical}</span>
      </div>
    </div>`
      const playerCard = document.createElement("div");
      const optionBar = document.createElement("div");
      playerDetaillsOnCard.classList.add(
        "grid",
        "grid-cols-2",
        "gap-4",
        "p-4"
      );
      playerCard.classList.add(
        "relative",
        "bg-[url('/assets/images/badge_gold.webp')]",
        "bg-cover",
        "bg-center",
        "rounded-lg",
        "w-28",

        "sm:w-48",
        "h-auto",
        "text-white",
        "p-4",
        "cursor-pointer",

      );
      playerCard.innerHTML = `
  <div class="absolute top-10 left-4 text-xl font-bold hidden sm:block ">${player.rating}
  <p class="text-sm text-center hidden sm:block  ">${player.position}</p>
  </div>
  <img class="w-22 h-28 mx-auto sm:w-18" src="${player.photo}" alt="${player.name}">
  <h3 class="text-sm font-bold  text-center">${player.name}</h3>
      ${statistic}
<div class="absolute  top-10 right-2 hidden sm:block sm:right-4">
<img class="w-6 h-6  rounded-full mx-auto mt-1" src="${player.flag}" alt="${player.nationality}">
  <img class="w-6 h-6 rounded-full mx-auto mt-1" src="${player.logo}" alt="${player.club}">
</div>  
  </div>
`;
      playerDetaillsOnCard.appendChild(playerCard)

      playerCard.addEventListener("click", () => {

        if (selectedPlayers.some((selected) => selected.name === player.name)) {
          alert('this player ready choise');
          return;
        }
        if (index !== null) {
          const targetDiv = document.querySelector(
            `.formation-wraper button[onclick*="${filterPosition}"][onclick*="${index}"]`
          );
          console.log(targetDiv)
          if (targetDiv) {
            targetDiv.innerHTML = "";
            const fieldPlayerCard = document.createElement("div");
            fieldPlayerCard.classList.add(
              "relative",
              "bg-[url('/assets/images/badge_gold.webp')]",
              "bg-cover",
              "bg-center",
              "rounded-sm",
              "w-[80px]",
              "h-[140px]",
              "text-white",
              "p-2",
              "cursor-pointer",


            );

            fieldPlayerCard.innerHTML = `
    <div class="absolute top-6 left-1 text-sm font-bold hidden sm:block">${player.rating}
      <p class="text-xs text-center hidden sm:block">${player.position}</p>
    </div>
    <img class="w-12 h-20 mx-auto object-contain" src="${player.photo}" alt="${player.name}">
    <h6 class="text-xs  text-center ">${player.name.split(" ").at(-1)}</h6>
  
   ${statistic2}
    <div class="absolute top-6 hidden sm:block right-2">
      <img class="w-4 h-4 rounded-full mx-auto mt-0.5" src="${player.flag}" alt="${player.nationality}">
      <img class="w-4 h-4 rounded-full mx-auto mt-0.5" src="${player.logo}" alt="${player.club}">
    </div>
    
  `;
            selectedPlayers.push(player);
            optionBar.classList.add("absolute", "top-2", "-right-4", "bg-black", "text-white", "p-2", "rounded", "cursor-pointer", "text-sm", "font-bold")
            optionBar.textContent = "X"
            targetDiv.appendChild(optionBar)
            optionBar.addEventListener("click", () => {
              targetDiv.innerHTML = `<button class=" add-player-card-btn text-white "  >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>`
              selectedPlayers = selectedPlayers.filter((selected) => selected.name !== player.name);
              playerlistContainer.classList.remove("hidden");

            });
            targetDiv.appendChild(fieldPlayerCard);
            playerlistContainer.classList.add("hidden");
          }
        }
      });
    });

  }
