document.getElementById('formationSelect').addEventListener('change', function () {
    const formation = this.value; 
    const formationContainer = document.querySelector('.formation-container');

    if (formationContainer) {
     
        formationContainer.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        setTimeout(() => {
            
            formationContainer.innerHTML = '';

            if (formation === '4-4-2') {
                formationContainer.innerHTML = `
                    <div class="player-card col-start-2 row-start-1">ST
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-1 row-start-2">LM
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-2 row-start-2">CM
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-2">CM
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-1">ST
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-4 row-start-2">RM
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-1 row-start-3">LB
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-2 row-start-3">CB
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-3">CB
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-4 row-start-3">RB
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                `;
            } else if (formation === '4-3-3') {
                // 4-3-3 Formation
                formationContainer.innerHTML = `
                
                    <div class="player-card col-start-2  row-start-1" style="margin-left:-70px" >LW<button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-1" style="margin-left:-70px">ST
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-4 row-start-1" style="margin-left:-70px">RW
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-2 row-start-2" style="margin-left:-70px">CM
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-2" style="margin-left:-70px">CM
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-4 row-start-2" style="margin-left:-70px">CM
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-1 row-start-3">LB
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-2 row-start-3">CB
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-3 row-start-3">CB
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button></div>
                    <div class="player-card col-start-4 row-start-3">RB
                    <button onclick="addPlayerCard()" class=" add-player-card-btn text-white "  >
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
