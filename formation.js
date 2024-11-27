document.getElementById('formationSelect').addEventListener('change', function () {
    const formation = this.value; // Get the selected value
    const formationContainer = document.querySelector('.formation-container'); // Select the formation container

    if (formationContainer) {
        // Add a fade-out effect
        formationContainer.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        setTimeout(() => {
            // Clear the current formation and fade-in the new formation
            formationContainer.innerHTML = '';

            if (formation === '4-4-2') {
                // 4-4-2 Formation
                formationContainer.innerHTML = `
                    <div class="player-card col-start-2 row-start-1">ST</div>
                    <div class="player-card col-start-1 row-start-2">LM</div>
                    <div class="player-card col-start-2 row-start-2">CM</div>
                    <div class="player-card col-start-3 row-start-2">CM</div>
                    <div class="player-card col-start-3 row-start-1">ST</div>
                    <div class="player-card col-start-4 row-start-2">RM</div>
                    <div class="player-card col-start-1 row-start-3">LB</div>
                    <div class="player-card col-start-2 row-start-3">CB</div>
                    <div class="player-card col-start-3 row-start-3">CB</div>
                    <div class="player-card col-start-4 row-start-3">RB</div>
                `;
            } else if (formation === '4-3-3') {
                // 4-3-3 Formation
                formationContainer.innerHTML = `
                    <div class="player-card col-start-2 row-start-1">LW</div>
                    <div class="player-card col-start-3 row-start-1">ST</div>
                    <div class="player-card col-start-4 row-start-1">RW</div>
                    <div class="player-card col-start-2 row-start-2">CM</div>
                    <div class="player-card col-start-3 row-start-2">CM</div>
                    <div class="player-card col-start-4 row-start-2">CM</div>
                    <div class="player-card col-start-1 row-start-3">LB</div>
                    <div class="player-card col-start-2 row-start-3">CB</div>
                    <div class="player-card col-start-3 row-start-3">CB</div>
                    <div class="player-card col-start-4 row-start-3">RB</div>
                `;
            }

            // Fade back in
            formationContainer.classList.remove('opacity-0');
        }, 500); // Matches the transition duration
    }
});
