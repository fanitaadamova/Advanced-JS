function areaAndVolumeCalculator(areaFunc, volFunc, shapesJSON) {

    const shapes = JSON.parse(shapesJSON);
    const result = [];

    for (const shape of shapes) {
        const area = areaFunc.call(shape);
        const volume = volFunc.call(shape);

        let currentObject = {
            area,
            volume
        }
        result.push(currentObject);
    }
   
    return result;
}

//def function
function area() {
    return Math.abs(this.x * this.y);
};
//def function
function vol() {
    return Math.abs(this.x * this.y * this.z);
};

//def shapesJSON
const s1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
//def shapesJSON
const s2 = `[
        {"x":"10","y":"-22","z":"10"},
        {"x":"47","y":"7","z":"-5"},
        {"x":"55","y":"8","z":"0"},
        {"x":"100","y":"100","z":"100"},
        {"x":"55","y":"80","z":"250"}
        ]`

//викаме функцията
console.log(areaAndVolumeCalculator(area, vol, s1))
areaAndVolumeCalculator(area, vol, s2)