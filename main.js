
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