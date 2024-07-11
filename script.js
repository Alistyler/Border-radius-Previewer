let copyText = document.getElementById("input");
let tooltip = document.getElementById("tooltip");

let image = document.getElementById("img");

let output = document.getElementsByClassName("slidercontainer");
let sliderTopLeftX = document.getElementById("topLeftX");
let sliderTopRightX = document.getElementById("topRightX");
let sliderBottomLeftX = document.getElementById("bottomLeftX");
let sliderBottomRightX = document.getElementById("bottomRightX");

let sliderTopLeftY = document.getElementById("topLeftY");
let sliderTopRightY = document.getElementById("topRightY");
let sliderBottomLeftY = document.getElementById("bottomLeftY");
let sliderBottomRightY = document.getElementById("bottomRightY");

function borderRadiusUpdate() {
  let borderRadiusValue =
    sliderTopLeftX.value + "% " + sliderTopRightX.value + "% " +
    sliderBottomRightX.value + "% " + sliderBottomLeftX.value + "% / " +
    sliderTopLeftY.value + "% " + sliderTopRightY.value + "% " +
    sliderBottomRightY.value + "% " + sliderBottomLeftY.value + "%";

  image.style.borderRadius = borderRadiusValue;
  copyText.value = borderRadiusValue;
}

sliderTopLeftX.oninput = function () {
  borderRadiusUpdate();
}

sliderTopRightX.oninput = function () {
  borderRadiusUpdate();
}

sliderBottomRightX.oninput = function () {
  borderRadiusUpdate();
}

sliderBottomLeftX.oninput = function () {
  borderRadiusUpdate();
}

sliderTopLeftY.oninput = function () {
  borderRadiusUpdate();
}

sliderTopRightY.oninput = function () {
  borderRadiusUpdate();
}

sliderBottomRightY.oninput = function () {
  borderRadiusUpdate();
}

sliderBottomLeftY.oninput = function () {
  borderRadiusUpdate();
}

copyText.oninput = function () {
  let values = copyText.value.split("/");
  if (values.length === 2) {
    let xValues = values[0].trim().split(" ");
    let yValues = values[1].trim().split(" ");

    if (xValues.length === 4 && yValues.length === 4) {
      sliderTopLeftX.value = parseInt(xValues[0]);
      sliderTopRightX.value = parseInt(xValues[1]);
      sliderBottomRightX.value = parseInt(xValues[2]);
      sliderBottomLeftX.value = parseInt(xValues[3]);

      sliderTopLeftY.value = parseInt(yValues[0]);
      sliderTopRightY.value = parseInt(yValues[1]);
      sliderBottomRightY.value = parseInt(yValues[2]);
      sliderBottomLeftY.value = parseInt(yValues[3]);

      borderRadiusUpdate();
    }
  }
}