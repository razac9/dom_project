// Add your code to this file

document.body.style["background-color"] = "#00008b"

document.querySelector("h2").innerHTML = "Here are Pokemon's incredible Gen 1 Starters!"
document.querySelector('h2').style["text-align"] = "center"

let imgsRef = document.querySelectorAll("img");

for (let i = 0; i < imgsRef.length; i++){
    imgsRef[i].style["border-style"] = "dotted";
    imgsRef[i].style["border-color"] = "#ffcb03";
}

let names = document.getElementsByClassName("pokemon_names");

for (let j = 0; j < names.length; j++){
    names[j].style["color"] = "#fdeea6";
}


document.getElementById("bulbasaur_container").style["background-color"] = "#388e8e";


document.querySelector("footer").style["text-decoration"] = "overline underline white 3px"
document.querySelector("footer").style["font-style"] = "italic";
document.querySelector('footer').style["font-size"] = "25px";
document.querySelector("footer").textContent = 'All Star Code - DOM Project';