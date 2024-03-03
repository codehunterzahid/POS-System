// this code is to add countdown timer on inventory

document.addEventListener('DOMContentLoaded', function () {
    let countdownTime = localStorage.getItem('countdownTime') || 8 * 60 * 60;

    let countdownInterval;

    const hoursElement = document.getElementById('hours');
    const minElement = document.getElementById('min');
    const secElement = document.getElementById('sec');

    updateCountdown();

    function updateCountdown() {
        const hours = Math.floor(countdownTime / 3600);
        const minutes = Math.floor((countdownTime % 3600) / 60);
        const seconds = countdownTime % 60;

        hoursElement.innerText = hours.toString().padStart(2, '0');
        minElement.innerText = minutes.toString().padStart(2, '0');
        secElement.innerText = seconds.toString().padStart(2, '0');

        localStorage.setItem('countdownTime', countdownTime);
    }

    function startCountdown() {
        countdownInterval = setInterval(function () {
            countdownTime--;

            updateCountdown();

            if (countdownTime < 0) {
                clearInterval(countdownInterval);
                console.log('Countdown has finished!');
            }
        }, 1000);
    }

    function stopCountdown() {
        clearInterval(countdownInterval);
    }

    startCountdown();

});
