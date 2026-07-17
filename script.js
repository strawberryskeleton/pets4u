
const catBtn = document.getElementById('cat-btn')
const dogBtn = document.getElementById('dog-btn')

const meow = new Audio("./assets/meow.mp3")
const bark = new Audio("./assets/bark.mp3")

catBtn.addEventListener('click', (e) => {
    // this is to stop redirecting immediately by <a>
    e.preventDefault()

    meow.play()

    // becuz i disabled the link before, now adding it back do it takes to meow page
    meow.onended = () => {
        window.location.href = catBtn.getAttribute('href')
    }
})

catBtn.addEventListener('mouseover', () => {
    meow.play()
})


dogBtn.addEventListener('click', (e) => {
    e.preventDefault()

    bark.play()

    bark.onended = () => {
        window.location.href = dogBtn.getAttribute('href')
    }
})

dogBtn.addEventListener('mouseover', () => {
    bark.play()
})