const container = document.querySelector(".container");

let dim = 16;

for (let i = 1; i <= 16**2; i++) {
    const div = document.createElement('div');
    div.classList.add("pixel");
    div.style.width = `${90/dim}vh`;
    div.style.height = `${90/dim}vh`;
    container.appendChild(div);
}

const pixels = document.querySelectorAll(".pixel");

pixels.forEach((i) => {
    i.addEventListener('mouseover',() => {
        i.style.backgroundColor = `rgb(${randNum(255)},${randNum(255)},${randNum(255)})`;
    })
});

const dim_button = document.querySelector('button');

function randNum(number) {
    return ~~(Math.random()*number);
}

dim_button.addEventListener('click',() => {
    dim = prompt("Desired width/height:");
    if (dim>100) dim = 100;
    container.innerHTML = "";
    for (let i = 1; i <= dim**2; i++) {
        const div = document.createElement('div');
        div.classList.add("pixel");
        div.style.width = `${90/dim}vh`;
        div.style.height = `${90/dim}vh`;
        container.appendChild(div);
    }
    const pixels = document.querySelectorAll(".pixel");

pixels.forEach((i) => {
    i.addEventListener('mouseover',() => {
        i.style.backgroundColor = `rgb(${randNum(255)},${randNum(255)},${randNum(255)})`;
    })
});    
});



