let copyText = document.getElementById("input");
let tooltip = document.getElementById("tooltip");

let image = document.getElementById("img");

let output = document.getElementsByClassName("slidercontainer");
let sliderTopLeft = document.getElementById("topLeftX");
let sliderTopRight = document.getElementById("topRightX");
let sliderBottomLeft = document.getElementById("bottomLeftX");
let sliderBottomRight = document.getElementById("bottomRightX");

output.innerHTML = sliderTopLeft.value;
output.innerHTML = sliderTopRight.value;
output.innerHTML = sliderBottomLeft.value;
output.innerHTML = sliderBottomRight.value;

function borderRadiusUpdate() {
  copyText.value = sliderTopLeft.value + "%" + " " +
                   sliderTopRight.value + "%" + " " +
                   sliderBottomRight.value + "%" + " " +
                   sliderBottomLeft.value + "%";
}

sliderTopLeft.oninput = function() {
  image.style.borderTopLeftRadius = sliderTopLeft.value + "%";
  borderRadiusUpdate();
}

sliderTopRight.oninput = function() {
  image.style.borderTopRightRadius = sliderTopRight.value + "%";
  borderRadiusUpdate();
}

sliderBottomRight.oninput = function() {
  image.style.borderBottomRightRadius = sliderBottomRight.value + "%";
  borderRadiusUpdate();
}

sliderBottomLeft.oninput = function() {
  image.style.borderBottomLeftRadius = sliderBottomLeft.value + "%";
  borderRadiusUpdate();
}

function Submit() {
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  tooltip.innerHTML = "Copy to clipboard";
}