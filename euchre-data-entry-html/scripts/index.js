// Select all radio buttons with name 'suit'
const suitRadios = document.querySelectorAll('input[name="suit"]');
const trickRadios = document.querySelectorAll('input[name="num-tricks"]');
const playerBids = document.querySelectorAll('.bid-grid-item');
const playerLabels = document.querySelectorAll('.player-label');

const mediaQuery = window.matchMedia("(max-width: 900px)");

let playerNum=1;

// Add event listeners
window.addEventListener('resize', updateScreenWidth);

playerLabels.forEach(label => {
    label.addEventListener('click', selectCurrentBidder);
});

trickRadios.forEach(trick => {
    trick.addEventListener('change', updateBidText);
});

suitRadios.forEach(suit => {
    suit.addEventListener('change', updateBidText);
});

console.log("Script loaded successfully");

// functions
function updateBidText() {
  const selectedTrick = document.querySelector('input[name="num-tricks"]:checked');
  const selectedSuit = document.querySelector('input[name="suit"]:checked');
  
  if (selectedTrick.value === "Shoot" || selectedTrick.value === "Pass") {
    playerBids[playerNum-1].innerText = `${selectedTrick.value}`;
  }
  else if (selectedTrick && selectedSuit) {
    playerBids[playerNum-1].innerText = `${selectedTrick.value} ${selectedSuit.value}`;
  }
}



function updateScreenWidth() {
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

function nextPlayer() {
    //TODO check that a bid was entered for previous player before moving to next player
    const selectedTrick = document.querySelector('input[name="num-tricks"]:checked');
    const selectedSuit = document.querySelector('input[name="suit"]:checked');
    if(selectedTrick){
        if (selectedSuit || selectedTrick.value === "Shoot" || selectedTrick.value === "Pass") {
            playerNum++;
            if (playerNum > 6) {
                playerNum = 1;
            }
            console.log(`Current Player: ${playerNum}`);
            updateCurrentBidder(playerNum);
        }
    }
    else alert("Please select a valid bid for the current player before moving to the next player.");

}

function selectCurrentBidder(e){
    const label = e.target; // Get the clicked label elementconst   
    // Get the index of the clicked label
    const index = Array.from(playerLabels).indexOf(label);
    playerNum = index + 1; // Update playerNum based on the clicked label
    console.log(`Current Player: ${playerNum}`);
    
    updateCurrentBidder(playerNum);
    
}

function updateCurrentBidder(playerNum) {
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