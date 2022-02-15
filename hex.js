colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById("btn")
const colorText = document.querySelector(".color")

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor()
    colorText.textContent = randomColor()
})

const randomColor = () => {
    let color = "#";
    for(let i=0; i<6; i++) {
        const randomNumber = randomGenerator()
        console.log("randomNumber: " + randomNumber + " color: " + colors[randomNumber])
        color += colors[randomNumber]
    }
    return color
}

const randomGenerator = () => {
    return Math.floor(Math.random() * colors.length)
}
