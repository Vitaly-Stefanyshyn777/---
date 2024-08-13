"use strict";

// Отримуємо елемент, до якого буде додано обробник подій
const buttons = document.querySelector(".buttons");

// Отримуємо посилання та блоки
const links = document.querySelectorAll(".link");
const blocks = document.querySelectorAll(".block");

// Додаємо обробник події для елемента buttons
buttons.addEventListener("click", function (event) {
    // Видаляємо активний клас з усіх посилань
    links.forEach((el) => {
        el.classList.remove("link-active");
    });

    // Додаємо клас "hidden" до всіх блоків
    blocks.forEach((item) => {
        item.classList.add("hidden");
    });

    // Перевіряємо, чи натиснутий елемент має клас "link"
    if (event.target.classList.contains("link")) {
        event.target.classList.add("link-active");
    }
    const data = event.target.getAttribute("data-");
    console.log(data);

    document.querySelector(`.block-content--${data}`).
    classList.remove("hidden");
});


