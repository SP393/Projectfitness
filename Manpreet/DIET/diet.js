document.addEventListener('DOMContentLoaded', function () {

    var buttons = document.querySelectorAll('.buttons');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {

            // Add 'active' class to the clicked button and remove it from siblings
            button.classList.add('active');
            siblings(button).forEach(function (sibling) {
                sibling.classList.remove('active');
            });

            // Get the value of the data-filter attribute
            var filter = button.getAttribute('data-filter');

            // Filtering logic
            var dietBoxes = document.querySelectorAll('.diet .box');
            if (filter === 'all') {
                dietBoxes.forEach(function (box) {
                    box.style.display = 'block';
                });
            } else {
                dietBoxes.forEach(function (box) {
                    if (!box.classList.contains(filter)) {
                        box.style.display = 'none';
                    } else {
                        box.style.display = 'block';
                    }
                });
            }
        });
    });

    // Helper function to get siblings of an element
    function siblings(element) {
        return Array.from(element.parentNode.children).filter(function (child) {
            return child !== element;
        });
    }

});
