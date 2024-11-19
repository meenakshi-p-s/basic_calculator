// function to display content
function displayContent(content){
    result.value +=content
}

//To clear input
function calClear(){
    result.value = " "
}

//result
function calcOutput(){
    result.value = eval(result.value)
}

//backspaace
function removeLastDigit(){
    result.value = result.value.slice(0,-1)
}