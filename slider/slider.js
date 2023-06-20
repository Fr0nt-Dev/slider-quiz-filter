const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const bottom = document.querySelector(".bottom");
const length = images.length;

let currentNumber = 1;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent';
    });
};

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBg();
        button.style.transform = `translate(-${i * 800}px)`;
        currentNumber = i + 1;
        button.style.backgroundColor = "white";
    });
});

const nextSlide = () => {
    slider.style.transform = `translate(-${currentNumber * 800}px)`;
    currentNumber++;
};
const prevSlide = () => {
    slider.style.transform = `translate(-${(currentNumber - 2) * 800}px)`;
    currentNumber--;
};
const getFirstSlide = () => {
    slider.style.transform = `translate(0px)`;
    currentNumber = 1;
};
const getLastSlide = () => {
    slider.style.transform = `translate(-${(length - 1) * 800}px)`;
    currentNumber = length;
};

const changeColor = () => {
    resetBg();
    buttons[currentNumber - 1].style.backgroundColor = "white";
}

right.addEventListener("click", () => {
    currentNumber < length ? nextSlide() : getFirstSlide();
    changeColor();
});
left.addEventListener("click", () => {
    currentNumber > 1 ? prevSlide() : getLastSlide();
    changeColor();
});