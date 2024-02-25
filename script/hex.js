
const HEXbtn = document.querySelector("#changebtnHEX")
const colorField = document.querySelector("#colorId")
const copyBtn = document.querySelector("#copied")
const copyfield = document.querySelector("#copyfield")

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


    setColorName(hexColor)
})

copyBtn.addEventListener('click', function(){

    navigator.clipboard.writeText(colorField.innerText)
    console.log(colorField.innerText);
    massage()

})

function massage(){

    copyfield.classList.replace('scale-0', 'scale-1')

}

// setTimeout(() => {
//     if (copyfield.classList.contains("scale-1")){

//     copyfield.classList.replace('scale-1', 'scale-0')

    
//     }
// }, 2000)
// window.addEventListener('click',hideText )


