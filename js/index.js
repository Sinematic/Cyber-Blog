const container = document.getElementById("container")
const header = document.querySelector("header")

async function getBanner() {
    // APIKey = NTVDouKU0ldR4FlffcNFsG1Pd1uLWd1JTEoF7V7b
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=NTVDouKU0ldR4FlffcNFsG1Pd1uLWd1JTEoF7V7b")
    const result = await response.json()

    const banner = document.createElement("figure")
    const img = document.createElement("img")
    const figcaption = document.createElement("figcaption")
    const explanation = document.createElement("p")

    banner.setAttribute("id", "banner")
    
    explanation.setAttribute("id", "explanation")
    img.src = result.hdurl
    figcaption.innerText = result.copyright
    explanation.innerText = result.explanation

    banner.append(img, figcaption)
    container.append(banner, explanation)
    container.insertBefore(banner, header)
    container.insertBefore(explanation, header)
}

getBanner();