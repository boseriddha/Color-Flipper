const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
    const randomNumber = randomNumberGenerator(colors.length)
    console.log(colors[randomNumber])
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

const randomNumberGenerator = (max) => {
    return Math.floor(Math.random() * max)
}