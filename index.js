// get all of the buttons from the DOM and store them in variables. 

const washBtn = document.getElementById("wash-car")
const mowBtn = document.getElementById("mow-lawn")
const weedBtn = document.getElementById("pull-weeds")
const invoiceBtn = document.getElementById("invoice-btn")
let totalAmnt = document.getElementById("final-amnt")
let costArray = []
let list = document.getElementById("list")

washBtn.addEventListener("click", function(){
    for(let i = 0; i < costArray.length; i++)
    {
        if (costArray[i] === "Wash Car") {
            console.log("You've already added this to the invoice.")
            return
        }
    }
    costArray.push("Wash Car")
    render(costArray)
})

mowBtn.addEventListener("click", function(){
    for(let i = 0; i < costArray.length; i++)
    {
        if (costArray[i] === "Mow Lawn") {
            console.log("You've already added this to the invoice.")
            return
        }
    }
    costArray.push("Mow Lawn")
    render(costArray)
})

weedBtn.addEventListener("click", function(){
    for(let i = 0; i < costArray.length; i++)
    {
        if (costArray[i] === "Pull Weeds") {
            console.log("You've already added this to the invoice.")
            return
        }
    }
    costArray.push("Pull Weeds")
    render(costArray)
})

invoiceBtn.addEventListener("click", function() {
    list.innerHTML = ""
    totalAmnt.textContent = "$0"
    costArray = []
})


function render(arr) {
    list.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {   
        if (arr[i] === "Wash Car") {
            list.innerHTML += `<div class="list-container"> <li> ${arr[i]} </li> <h2 class="price"> $10 </> </div>`
        }
        if (arr[i] === "Mow Lawn") {
            list.innerHTML += `<div class="list-container"> <li> ${arr[i]} </li> <h2 class="price"> $20 </> </div>`
        }
        if (arr[i] === "Pull Weeds") {
            list.innerHTML += `<div class="list-container"> <li> ${arr[i]} </li> <h2 class="price"> $30 </> </div>`
        }
    }
    calculate()
}

function calculate() {
    let total = 0;
    console.log(costArray)
    for(let i = 0; i < costArray.length; i++)
    {
        if (costArray[i] === "Wash Car") {
            total+=10
        }
        if (costArray[i] === "Mow Lawn") {
            total+=20
        }
        if (costArray[i] === "Pull Weeds") {
            total+=30
        }
    }
    console.log(total)
    totalAmnt.textContent = "$" + total
}