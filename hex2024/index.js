const HexArray= [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let firstColorBox = document.getElementById("first-color-box")
let firstHexCode = document.getElementById("first-hex-code")
let button = document.getElementById("button")
let secondColorBox = document.getElementById("second-color-box")
let secondHexCode = document.getElementById("second-hex-code")
let thirdColorBox = document.getElementById("third-color-box")
let thirdHexCode = document.getElementById("third-hex-code")



function randomWholeNumber(){
    let result= Math.random() * HexArray.length
    let randomWholeNumber = Math.floor(result)
    return randomWholeNumber
}

    
 
    //let hexNumber = HexArray[randomWholeNumber]
          //console.log(hexNumber)

         // 
    


button.addEventListener("click", function(){    
let hexCode = "#"
    for(let hexCode1 = 0; hexCode1 < 6; hexCode1++ ){
       let hexNumber = HexArray[randomWholeNumber()]
       hexCode += hexNumber
         console.log(hexCode)
    }
    firstColorBox.style.backgroundColor = hexCode
    firstHexCode.textContent = hexCode


let secndhexCode = "#"
    for(let hexCode2 = 0; hexCode2 < 6; hexCode2++ ){
       let hexNumber2 = HexArray[randomWholeNumber()]
       secndhexCode += hexNumber2
         console.log(secndhexCode)
    }
    secondColorBox.style.backgroundColor = secndhexCode
    secondHexCode.textContent = secndhexCode  

let thrdhexCode = "#"
    for(let hexCode3 = 0; hexCode3 < 6; hexCode3++ ){
       let hexNumber3 = HexArray[randomWholeNumber()]
       thrdhexCode += hexNumber3
         console.log(thrdhexCode)
    }
    thirdColorBox.style.backgroundColor = thrdhexCode
    thirdHexCode.textContent = thrdhexCode  
})
    

