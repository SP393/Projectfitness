// JavaScript to handle live search suggestions
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const faqContainer = document.getElementById('faqContainer');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        // Loop through each FAQ item
        Array.from(faqContainer.getElementsByClassName('faq-item')).forEach(item => {
            const question = item.querySelector('.question').textContent.toLowerCase();
            const answer = item.querySelector('.answer').textContent.toLowerCase();

            // Check if the search term is found in the question or answer
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block'; // Show the FAQ item
            } else {
                item.style.display = 'none'; // Hide the FAQ item
            }
        });
    });
});

// Function for hamburger navigation bar
function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
