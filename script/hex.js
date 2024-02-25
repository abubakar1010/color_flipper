
const HEXbtn = document.querySelector("#changebtnHEX")
const colorField = document.querySelector("#colorId")

function random(){

    let randomNumber =Math.floor( Math.random() * 255)
    return randomNumber
}


function setColorName(code){

    colorField.innerText = code 
}

HEXbtn.addEventListener('click',function(e){

    e.stopPropagation()
    const red = random();
    const blue = random();
    const green = random();
    const hexColor = `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`

    document.getElementById("bghex").style.backgroundColor = hexColor
    console.log(hexColor);


    setColorName(hexColor)
})