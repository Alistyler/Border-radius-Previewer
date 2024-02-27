let copyText = document.getElementById("input");

function Submit() {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

let image = document.getElementById("img");

let output = document.getElementsByClassName("slidercontainer");
let sliderTopLeft = document.getElementById("topLeft");
let sliderTopRight = document.getElementById("topRight");
let sliderBottomLeft = document.getElementById("bottomLeft");
let sliderBottomRight = document.getElementById("bottomRight");

output.innerHTML = sliderTopLeft.value;
output.innerHTML = sliderTopRight.value;
output.innerHTML = sliderBottomLeft.value;
output.innerHTML = sliderBottomRight.value;

sliderTopLeft.oninput = function() {
  image.style.borderTopLeftRadius = sliderTopLeft.value + "%";
}

sliderTopRight.oninput = function() {
  image.style.borderTopRightRadius = sliderTopRight.value + "%";
}

sliderBottomLeft.oninput = function() {
  image.style.borderBottomLeftRadius = sliderBottomLeft.value + "%";
}

sliderBottomRight.oninput = function() {
  image.style.borderBottomRightRadius = sliderBottomRight.value + "%";
}