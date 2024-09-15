var inputNumber = document.querySelector("#input-number")
var tablePrint = document.querySelector("#table-print")
var btn = document.querySelector("#btn")

function tablemaker(){
    tablePrint.innerHTML = ``
           number = inputNumber.value
           for(var i=1; i<=10; i++){
            tablePrint.innerHTML = tablePrint.innerHTML + `${number}   X    ${i}    =    ${number*i}   <br >`
        }

}