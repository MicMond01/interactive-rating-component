const firstSlide = document.querySelector(".container-main")
const secondSlide = document.querySelector(".container-thankyou")

let scoreEl = document.querySelectorAll(".circle")
const submitBtn = document.getElementById("btn-el")
let resultTx = document.getElementById("result-tx")

for (let i = 0; i < scoreEl.length; i++) {

    scoreEl[i].addEventListener('click', () => {
        let newScore = scoreEl[i].innerHTML

        for (let i = 0; i < scoreEl.length; i++){
            scoreEl[i].classList.contains("selected")
            scoreEl[i].classList.remove("selected")
        }

        scoreEl[i].classList.add("selected")

        submitBtn.addEventListener('click', () => {
            firstSlide.style.display = 'none'
            secondSlide.style.display = 'block'
            resultTx.innerHTML = "You choose " + newScore + " out of 5"
        })
    })

}