const colorinputbtn = document.querySelector("#colorinput");
const applybtn = document.querySelector(".applybtn");
const randombtn = document.querySelector(".randombtn");
const currColorValue = document.querySelector(".currcolorvalue");
let container = document.querySelector(".container");

// console.log(colorinputbtn, applybtn, randombtn, currColorValue);
const colorArray = [
    "red", "green", "blue", "yellow", "orange", "purple", "pink", "brown",
    "tomato", "lightgreen","skyblue", "white", "black", "gray", "cyan", "magenta",
     "lime", "teal", "navy", "maroon", "olive", "gold", "silver", "coral", "indigo",
      "violet", "khaki", "plum", "salmon","turquoise" , "lavender", "powderblue",
       "orchid", "crimson", "darkslategray", "lightcoral", "lightsalmon",  "dodgerblue",
    "mediumseagreen", "mediumslateblue", "mediumturquoise" , "mediumvioletred", 
    "midnightblue", "navajowhite","darkorange", "darkorchid", "darkseagreen",
    "darkslateblue", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "firebrick", "floralwhite", "forestgreen", "gainsboro", "ghostwhite", "goldenrod"];
//58

const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    console.log(colorArray[randomIndex]);
    return colorArray[randomIndex];
}
let changeContainerColor = (color) => {
    console.log("Changing Container Color to", color);
    container.style.backgroundColor = color;
    currColorValue.innerText = color;
}
let HandleRandomBtnClick = () => {
    console.log("Random Color Button Clicked");
let color = generateRandomColor();
console.log(color);
return changeContainerColor(color);
}

let HandleApplyBtnClick = () => {
    const color = colorinputbtn.value;
    changeContainerColor(color);
}

randombtn.addEventListener("click", HandleRandomBtnClick);
applybtn.addEventListener("click", HandleApplyBtnClick);

 generateRandomColor();
// changeContainerColor("black"); // Initial color



