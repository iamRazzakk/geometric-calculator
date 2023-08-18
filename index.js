function calculateTriangleArea() {
    const baseField = document.getElementById('triangle-base')
    const baseFieldText = baseField.value
    const base = parseFloat(baseFieldText)
    // console.log(base);
    const heightFild = document.getElementById("triangle-height")
    const heightFildText = heightFild.value
    const height = parseFloat(heightFildText)
    // console.log(height);
    const calculate = 0.5 * base * height
    // console.log(calculate);
    const area = document.getElementById("triangle-area")
    area.innerText = calculate
}
function calculateRectangleArea() {
    // console.log("vai");
    const widthFild = document.getElementById("rectangle-width")
    const widthFildText = widthFild.value
    const width = parseFloat(widthFildText)
    // console.log( width);
    const lengthFild = document.getElementById('rectangle-length')
    const lengthFildText = lengthFild.value
    const length = parseFloat(lengthFildText)
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