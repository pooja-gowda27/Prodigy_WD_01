document.addEventListener("DOMContentLoaded", function () {
    const classItems = document.querySelectorAll(".class-item");
    const programItems = document.querySelectorAll(".program-item");

    classItems.forEach(item => {
        item.addEventListener("click", function () {
            alert(`You selected the ${this.querySelector("h3").textContent} class!`);
        });
    });

    programItems.forEach(item => {
        item.addEventListener("click", function () {
            alert(`You selected the ${this.querySelector("h3").textContent} program!`);
        });
    });
});
