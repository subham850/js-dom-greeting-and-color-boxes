const color1 = document.getElementById('box-1');
color1.addEventListener('click', () => {
    color1.style.backgroundColor = "red";
})

const color2 = document.getElementById('box-2');
color2.addEventListener('click', () => {
    color2.style.backgroundColor = "blue";
})

const color3 = document.getElementById('box-3');
color3.addEventListener('click', () => {
    color3.style.backgroundColor = "green";
})

const color4 = document.getElementById('box-4');
color4.addEventListener('click', () => {
    color4.style.backgroundColor = "yellow";
})





const onClickFunc = () => {
    const input = document.getElementById('textToAdd').value;
    const heading = document.getElementById('heading');

    heading.innerText = "Hello " + input;
}


