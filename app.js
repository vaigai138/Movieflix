const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
        clickCounter++;
        const currentTransform = getComputedStyle(movieLists[i]).transform;

        // If no transform is applied, use translateX(0)
        let currentTranslateX = 0;

        if (currentTransform !== 'none') {
            const matrix = new WebKitCSSMatrix(currentTransform);
            currentTranslateX = matrix.m41;
        }
        const ratio = Math.floor(window.innerWidth / 270);

        if (itemNumber - (4 + clickCounter) +(4 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

const ball = document.querySelector(".toggle-ball");
const item = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");

ball.addEventListener("click",()=>{
    item.forEach(item=>{
        item.classList.toggle("active")
    });
    ball.classList.toggle("active")
})
