
const hsCode = document.getElementById("hs-code")
console.log("heofishof")
const hsDesciption = document.getElementById("hs-description")
const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const codeResult = document.getElementById("result-1")
const descriptionResult = document.getElementById("result-2")


button1.addEventListener("click",function(event){
    event.preventDefault()
    let hsCodeValue = hsCode.value
    console.log(hsCodeValue)
    if(hsCodeValue!=""){
        codeResult.innerHTML = `the code : ${hsCodeValue}`
    }
})

button2.addEventListener("click",function(event){
    event.preventDefault()
    let hsDescriptionValue = hsDesciption.value
    console.log(hsDescriptionValue)
    if(hsDescriptionValue!=""){
        descriptionResult.innerHTML = `the description : ${hsDescriptionValue}`
    }
})
