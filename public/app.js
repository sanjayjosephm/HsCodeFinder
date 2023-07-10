const hsCode = document.getElementById("hs-code")
const hsDesciption = document.getElementById("hs-description")
const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const codeResult = document.getElementById("result-1")
const descriptionResult = document.getElementById("result-2")

console.log(hsCode)

button1.addEventListener("click",function(event){
    event.preventDefault()
    let hsCodeValue = hsCode.value
    console.log(hsCodeValue)
    if(hsCodeValue!=""){
        // codeResult.innerHTML = `the code : ${hsCodeValue}`
        fetch('/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({hsCodeValue})
        })
        .then(response => response.json())
        .then(data => {
            // Update the UI with the retrieved data
            const descriptionValue = data.description;
            codeResult.innerHTML = `<p><span>The description: </span><br>${descriptionValue}</p>`;
        })
        .catch(error => {
            console.error('Failed to fetch data from the server:', error);
        });
    }

})


button2.addEventListener("click",function(event){
    event.preventDefault()
    let hsDescriptionValue = hsDesciption.value
    console.log(hsDescriptionValue)
    if (hsDescriptionValue !== "") {
        // descriptionResult.innerHTML = `The description: ${hsDescriptionValue}`;

        // Send the input data to the backend
        fetch('/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ hsDescription: hsDescriptionValue })
        })
        .then(response => response.json())
        .then(data => {
            // Update the UI with the retrieved data
            const codeValue = data.code;
            descriptionResult.innerHTML = `<p><span>The code: </span><br>${codeValue}</p>`;
        })
        .catch(error => {
            console.error('Failed to fetch data from the server:', error);
        });
    }
})


