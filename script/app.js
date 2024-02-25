const RGBbtn = document.querySelector("#changebtnRGB")
const HEXbtn = document.querySelector("#changebtnHEX")
const colorField = document.querySelector("#colorId")

function random(){

    let randomNumber =Math.floor( Math.random() * 255)
    return randomNumber
}





RGBbtn.addEventListener('click', function (e){

    e.stopPropagation()
    const red = random();
    const blue = random();
    const green = random();
    const rgbColor = `rgb(${red},${blue},${green})`

    document.getElementById("bg").style.backgroundColor = rgbColor


    setColorName(rgbColor)

})

function setColorName(code){

    colorField.innerText = code 
}

