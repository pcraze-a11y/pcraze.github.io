// Small interactive demo for the web app page.

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");
    const resetButton = document.getElementById("resetButton");
    const display = document.getElementById("countDisplay");
    let count = 0;

    if (button && display) {
        button.addEventListener("click", function () {
            count += 1;
            display.textContent = count;
        });
    }

    if (resetButton && display) {
        resetButton.addEventListener("click", function () {
            count = 0;
            display.textContent = count;
        });
    }
});
