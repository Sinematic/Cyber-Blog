const container = document.getElementById("container")
const header = document.querySelector("header")

async function getBanner() {
    // APIKey = NTVDouKU0ldR4FlffcNFsG1Pd1uLWd1JTEoF7V7b
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=NTVDouKU0ldR4FlffcNFsG1Pd1uLWd1JTEoF7V7b")
    const result = await response.json()

    document.getElementById("banner-img").src = result.hdurl
    document.getElementById("banner-title").innerText = result.title
    document.getElementById("explanation").innerText = result.explanation
    document.getElementById("banner").style.display = "block"
    //console.log(result)
}

getBanner();
