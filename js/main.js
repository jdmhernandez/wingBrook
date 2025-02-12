function toggleRecipe(id) {
    const recipe = document.getElementById(id);
    recipe.style.display = recipe.style.display === "block" ? "none" : "block";
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