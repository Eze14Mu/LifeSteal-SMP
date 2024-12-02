// Example: Simulate fetching the player count
document.addEventListener("DOMContentLoaded", () => {
    const playerCountElement = document.getElementById("player-count");
    
    // Simulate an API call
    setTimeout(() => {
        playerCountElement.textContent = "15"; // Replace with real data if available
    }, 1000);

    // Handle form submission
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        alert(`Thanks for your message, ${name}!`);
        form.reset();
    });
});
