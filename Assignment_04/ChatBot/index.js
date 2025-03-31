function getResponse() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let response = "";

    if (input.includes("hello")) {
        response = "Hi there! How can I assist you?";
    } else if (input.includes("weather")) {
        response = "I can’t check the weather yet, but you can try a weather app!";
    } else if (input.includes("bye")) {
        response = "Goodbye! Have a great day!";
    } else {
        response = "Sorry, I don’t understand. Try asking something else.";
    }

    document.getElementById("botResponse").innerText = response;
}
