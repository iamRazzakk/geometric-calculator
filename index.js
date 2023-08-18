function calculateTriangleArea() {
    const baseField = document.getElementById('triangle-base')
    const baseFieldText = baseField.value
    const base = parseFloat(baseFieldText)
    // console.log(base);
    const heightField = document.getElementById("triangle-height")
    const heightFieldText = heightField.value
    const height = parseFloat(heightFieldText)
    // console.log(height);
    const calculate = 0.5 * base * height
    // console.log(calculate);
    const area = document.getElementById("triangle-area")
    area.innerText = calculate
}
function calculateRectangleArea() {
    // console.log("vai");
    const widthField = document.getElementById("rectangle-width")
    const widthFieldText = widthField.value
    const width = parseFloat(widthFieldText)
    // console.log( width);
    const lengthField = document.getElementById('rectangle-length')
    const lengthFieldText = lengthField.value
    const length = parseFloat(lengthFieldText)
    // console.log(length);
    const calculate = width * length
    const areaSpan = document.getElementById("Area-span")
    areaSpan.innerText = calculate
}
function calculateParallelogramArea() {
    const parallelogramField = document.getElementById('parallelogram-id')
    const parallelogramFieldText = parallelogramField.value;
    const base = parseFloat(parallelogramFieldText)
    // console.log(base);
    const parallelogramHeightField = document.getElementById('Height')
    const parallelogramHeightFieldText = parallelogramHeightField.value;
    const Height = parseFloat(parallelogramHeightFieldText)
    // console.log(Height);
    const calculate = base * Height
    const areas = document.getElementById('parallelogramText')
    areas.innerText = calculate
}

// reuse function
function calculateParallelogramArea() {
    const base = getInputValue("perallelogram-base")
    // console.log(base);
    const height = getInputValue("parallelogram-height")
    const calculate = base * height
    // console.log(calculate);
    setElementText("parallelogram-area", calculate)
}

function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId)
    const inputValueText = inputField.value;
    // console.log(inputValueText);
    const value = parseFloat(inputValueText)
    return value
}
function setElementText (elementID, calculate){
    const element = document.getElementById(elementID)
    element.innerText = calculate;
}
// Ellipse
function calculateEllipseArea(){
    const majorRedious = getInputValue("ellipse-major-redious")
    const minorRedious = getInputValue("ellipse-minor-redious")
    const area = 3.1415 * majorRedious * minorRedious;
    setElementText("ellips-area", area)
}