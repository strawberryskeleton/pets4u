
const getNewBtn = document.getElementById('get-new-btn')
const imgDiv = document.getElementById('img-div')

getNewBtn.addEventListener('click', () => {
    // fetchFromAPI()
    displayAPIResult()
})

async function fetchFromAPI () {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search')

        if(!response.ok) {
            throw new Error(`API Fetching Error. ${response.status}`)
        }

        const data = await response.json()
        console.log(data[0])
        return data[0].url

    } catch (err) {
        console.log(err)
    }
}

async function displayAPIResult () {
    imgURL = await fetchFromAPI()

    // console.log(imgURL)

    // console.log(imgDiv.innerHTML)

    imgDiv.innerHTML = `<img src="${imgURL}" alt="cat img">`
    console.log(imgDiv.innerHTML)
}