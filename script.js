const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const cardContent = document.getElementById('card-content');
    const currentCard = flashcards[currentIndex];
    
    if (showingTerm) {
        cardContent.textContent = currentCard.term;
    } else {
        cardContent.textContent = currentCard.definition;
    }
}

// The rest of the code you will write is apart of event listeners

// Click card to toggle between term and definition
document.getElementById('flashcard').addEventListener('click', function() {
    showingTerm = !showingTerm;
    displayCard();
});

// Next button - loops back to first card
document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingTerm = true;
    displayCard();
});

// Previous button - loops to last card
document.getElementById('prev-btn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingTerm = true;
    displayCard();
});

// Add new card
document.getElementById('add-card-btn').addEventListener('click', function() {
    const term = document.getElementById('new-term').value.trim();
    const definition = document.getElementById('new-definition').value.trim();
    
    if (term && definition) {
        flashcards.push({ term: term, definition: definition });
        
        // Clear input fields
        document.getElementById('new-term').value = '';
        document.getElementById('new-definition').value = '';
        
        // Display the newly added card
        currentIndex = flashcards.length - 1;
        showingTerm = true;
        displayCard();
    } else {
        alert('Please enter both term and definition');
    }
});

// This line will display the card when the page is refreshed
window.onload = displayCard;
