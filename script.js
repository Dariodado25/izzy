const messages = {
    prompts: [
        "Ne sei proprio sicura?",
        "Really Really?? ",
        "Pensaci bene amore...",
        "Last chanse!",
        "Yullìbrake my hearth 💔",
        "Ok, I will stop asking...",
        "JK, say yes please? ❤️"
    ],
    countdown: "Mancano %d giorni, %h ore e %m minuti at our San Valentino!",
    
};

let messageIndex = 0;


function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages.prompts[messageIndex];
    messageIndex = (messageIndex + 1) % messages.prompts.length;

   
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 100 - 50;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
    
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;

    setTimeout(() => {
        noButton.style.transform = "translate(0, 0)";
    }, 500);
}


function handleYesClick() {
    
   
    try {
        const confettiSettings = { 
            particleCount: 200, 
            spread: 70, 
            origin: { y: 0.6 }
        };
        confetti(confettiSettings);
        
       
        window.location.href = "yes_page.html";
    } catch (error) {
        console.error("Errore grave:", error);
        window.location.href = "yes_page.html"; 
    }
}


function updateCountdown() {
    const valentinesDay = new Date("2025-02-22T00:00:00");
    const now = new Date();
    const diff = valentinesDay - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown').textContent = 
        messages.countdown
            .replace('%d', days)
            .replace('%h', hours)
            .replace('%m', minutes);
}


document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateCountdown, 1000);
    updateCountdown();
});

function showFallbackMessage() {
    document.getElementById('fallbackText').hidden = false;
}