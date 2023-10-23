document.addEventListener("DOMContentLoaded", function() {
    const clockElement = document.getElementById("clock");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");

    let intervalID = null;

    function updateClock() {
        const now = new Date();
        const hours = now.getHours() % 12 || 12; // Formato de 12 horas
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = now.getHours() < 12 ? "AM" : "PM";
        const timeString = `${hours}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
        clockElement.textContent = timeString;
    }

    function padZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    startButton.addEventListener("click", function() {
        intervalID = setInterval(updateClock, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
        updateClock(); // Actualiza el reloj inmediatamente al hacer clic en "Iniciar Reloj".
    });

    stopButton.addEventListener("click", function() {
        clearInterval(intervalID);
        startButton.disabled = false;
        stopButton.disabled = true;
    });
});