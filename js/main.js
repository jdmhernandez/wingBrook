function toggleRecipe(id) {
    const recipe = document.getElementById(id);
    const button = recipe.previousElementSibling; // Get the button element
    
    if (recipe.style.display === "block") {
        recipe.style.display = "none";
        button.textContent = "View Recipe";
    } else {
        recipe.style.display = "block";
        button.textContent = "Hide Recipe";
    }
}

// Close popup if clicking outside
document.getElementById("recipePopup").addEventListener("click", function (event) {
    if (event.target === this) {
        hidePopup();
    }
});

function showPopup(event) {
    if (event) {
        event.preventDefault(); // Prevent default action (for <a> tag)
    }
    document.getElementById("recipePopup").style.display = "flex"; // Show popup
    document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
}

function hidePopup() {
    document.getElementById("recipePopup").style.display = "none"; // Hide popup
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Fix nav collapse functionality
const nav = document.querySelector('.znav');
const banner = document.querySelector('#home');

window.addEventListener('scroll', () => {
    if (banner) {
        const bannerBottom = banner.offsetTop + banner.offsetHeight;
        const scrollPosition = window.scrollY;
        const isMobile = window.innerWidth <= 768;
        
        const threshold = isMobile ? 122 : bannerBottom * 0.6;

        if (scrollPosition > threshold) {
            nav.classList.add('nav-collapsed');
            hidePopup(); // Hide popup when scrolling past threshold
        } else {
            nav.classList.remove('nav-collapsed');
        }
    }
});

// Make images clickable
document.querySelectorAll('.recipe-card img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
        const recipeId = this.closest('.recipe-card').querySelector('.recipe-content').id;
        toggleRecipe(recipeId);
    });
});

$(document).ready(function() {
    $('#privacyModal').modal('show');
});