document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    document.getElementById("formMessage").textContent = `Danke, ${name}, für deine Nachricht: "${message}"!`;
    this.reset(); // Formular zurücksetzen
});
