// Array of motivational messages for each mood
const messages = {
    "😊": "Keep spreading that joy!",
    "😢": "It's okay to feel down. Better days are coming!",
    "😠": "Take a deep breath. You're stronger than this!",
    "😌": "Stay calm and carry on.",
    "😆": "Laughter is the best medicine!"
};

// Function to update the mood display area
function updateMood(emoji) {
    document.getElementById("selected-emoji").textContent = emoji;
    document.getElementById("message").textContent = messages[emoji];
}
