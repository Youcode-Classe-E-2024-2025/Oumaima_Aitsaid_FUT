document.getElementById('formationSelect').addEventListener('change', function () {
    const formation = this.value; 
    const formationContainer = document.querySelector('.formation-container');

    if (formationContainer) {
     
        formationContainer.classList.add('opacity-0', 'transition-all');
        setTimeout(() => {
            
            formationContainer.innerHTML = '';

            if (formation === '4-4-2') {
                formationContainer.innerHTML = `
                    <div class="player-card col-start-2 row-start-1">ST
                    <button onclick="addPlayerCard('ST',11)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-1 row-start-2">LM
                    <button onclick="addPlayerCard('LM',10)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-2 row-start-2">CM
                    <button onclick="addPlayerCard('CM',9)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-2">CM
                    <button onclick="addPlayerCard('CM',8)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-1">ST
                    <button onclick="addPlayerCard('ST',7)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-4 row-start-2">RM
                    <button onclick="addPlayerCard('RM',6)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-1 row-start-3">LB
                    <button onclick="addPlayerCard('LB',5)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-2 row-start-3">CB
                    <button onclick="addPlayerCard('CB',4)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-3">CB
                    <button onclick="addPlayerCard('CB',3)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-4 row-start-3">RB
                    <button onclick="addPlayerCard('RB',2)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                `;
            } else if (formation === '4-3-3') {
                // 4-3-3 Formation
                formationContainer.innerHTML = `
                
                    <div class="player-card col-start-2  row-start-1" style="margin-left:-70px" >LW<button onclick="addPlayerCard('LW',11)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-1" style="margin-left:-70px">ST
                    <button onclick="addPlayerCard('ST',20)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-4 row-start-1" style="margin-left:-70px">RW
                    <button onclick="addPlayerCard('RW',19)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-2 row-start-2" style="margin-left:-70px">CM
                    <button onclick="addPlayerCard('CM',18)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-2" style="margin-left:-70px">CM
                    <button onclick="addPlayerCard('CM',17)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-4 row-start-2" style="margin-left:-70px">CM
                    <button onclick="addPlayerCard('CM',16)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-1 row-start-3">LB
                    <button onclick="addPlayerCard('LB',15)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-2 row-start-3">CB
                    <button onclick="addPlayerCard('CB',14)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-3">CB
                    <button onclick="addPlayerCard('CB',13)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-4 row-start-3">RB
                    <button onclick="addPlayerCard('RB',12)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                `;
            }

            
            formationContainer.classList.remove('opacity-0');
        }, 500); 
    }
});
