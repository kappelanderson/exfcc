let text = document.getElementById("text")
let btn = document.getElementById("btn")
let page = document.getElementById("page")
let colors = ["blue", "yellow", "gray", "red", "green", "purple"]
let i = 0

function changecolor(arr){
    i = Math.floor(Math.random() * 5)
    switch(arr[i]){
        case "blue":
            text.innerText = "Color: Blue"
            page.style.backgroundColor = "blue"
            break
        case "yellow":
            text.innerText = "Color: Yellow"
            page.style.backgroundColor = "yellow"
            break
        case "gray":
            text.innerText = "Color: Gray"
            page.style.backgroundColor = "gray"
            break
        case "red":
            text.innerText = "Color: Red"
            page.style.backgroundColor = "red"
            break
        case "green":
            text.innerText = "Color: Green"
            page.style.backgroundColor = "green"
            break
        case "purple":
            text.innerText = "Color: Purple"
            page.style.backgroundColor = "purple"
    }

}


changecolor(colors)