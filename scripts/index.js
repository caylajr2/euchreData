// Select all radio buttons with name 'suit'
const suitRadios = document.querySelectorAll('input[name="suit"]');
const trickRadios = document.querySelectorAll('input[name="num-tricks"]');

trickRadios.forEach(trick => {
    trick.addEventListener('change', updateBidText);
});

suitRadios.forEach(suit => {
    suit.addEventListener('change', updateBidText);
});


// Example function
function performSuitAction(tricks,suit) {
  // Do something with the selected suit
//   alert(`Performing action for ${suit}`);
  document.getElementById('p1-bid-text').innerText = `Player 1 Bid:  ${tricks}${suit}`;
}

function updateBidText() {
  const selectedTrick = document.querySelector('input[name="num-tricks"]:checked');
  const selectedSuit = document.querySelector('input[name="suit"]:checked');
  
  if (selectedTrick && selectedSuit) {
    document.getElementById('p1-bid-text').innerText = `Player 1 Bid: ${selectedTrick.value}${selectedSuit.value}`;
  }
}
