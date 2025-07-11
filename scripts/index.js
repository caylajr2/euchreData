// Select all radio buttons with name 'suit'
const suitRadios = document.querySelectorAll('input[name="suit"]');
const trickRadios = document.querySelectorAll('input[name="num-tricks"]');
const playerBids = document.querySelectorAll('.bid-grid-item');
const playerLabels = document.querySelectorAll('.player-label');

const mediaQuery = window.matchMedia("(max-width: 900px)");

// Add event listener for window resize
window.addEventListener('resize', updateScreenWidth);


let playerNum=1;

playerLabels.forEach(label => {
    label.addEventListener('click', updateCurrentBidder);
});

trickRadios.forEach(trick => {
    trick.addEventListener('change', updateBidText);
});

suitRadios.forEach(suit => {
    suit.addEventListener('change', updateBidText);
});


function updateBidText() {
  const selectedTrick = document.querySelector('input[name="num-tricks"]:checked');
  const selectedSuit = document.querySelector('input[name="suit"]:checked');
  
  if (selectedTrick && selectedSuit) {
    playerBids[playerNum-1].innerText = `${selectedTrick.value} ${selectedSuit.value}`;
  }
}

function nextPlayer() {
    playerNum++;
    if (playerNum > 6) {
        playerNum = 1;
    }
    console.log(`Current Player: ${playerNum}`);

    //TODO check that a bid was entered for previous player before moving to next player
    
  
    //TODO highight current bidder in the grid
    playerLabels.forEach(bid => bid.classList.remove('current-bidder'));
    playerLabels[playerNum-1].classList.add('current-bidder');
  
    // Update the player bid text element
    const playerBidText = document.getElementById('bid-header-text');
    playerBidText.innerText = `Player ${playerNum} Bid:`;
  
    // Reset the radio buttons for the next player
    suitRadios.forEach(radio => radio.checked = false);
    trickRadios.forEach(radio => radio.checked = false);
}

function updateScreenWidth(event) {
    // If the media query matches, adjust the player labels
    if (mediaQuery.matches) {
            playerLabels.forEach((label, index) => {
            label.innerText = `P${index + 1}`;
        });
    }
    else{
            playerLabels.forEach((label, index) => {
            label.innerText = `Player${index + 1}`;
        });
    }
}

function updateCurrentBidder(e){
        const label = e.target; // Get the clicked label elementconst   
        // Get the index of the clicked label
        const index = Array.from(playerLabels).indexOf(label);
        playerNum = index + 1; // Update playerNum based on the clicked label
        console.log(`Current Player: ${playerNum}`);
        
        // Highlight the current bidder in the grid
        playerLabels.forEach(bid => bid.classList.remove('current-bidder'));
        playerLabels[playerNum-1].classList.add('current-bidder');
        
        // Update the player bid text element
        const playerBidText = document.getElementById('bid-header-text');
        playerBidText.innerText = `Player ${playerNum} Bid:`;
    }