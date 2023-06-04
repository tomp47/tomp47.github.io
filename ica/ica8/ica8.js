const btn = document.querySelector("#button");
// console.log(btn)
const paragraph = document.querySelector("p");


btn.onclick = () => {
    const color = prompt("What color would you like the  box to be?")
    alert(`You changed the color  to ${color}!`)
    paragraph.style.backgroundColor = color;
}


