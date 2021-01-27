document.addEventListener("DOMContentLoaded", () => loadFasts())

const renderFast = (fastHash) => {

    const div = document.createElement("div")
    const ul = document.createElement("ul")
    const li = document.createElement("li")

    li.innerHTML = fastHash.start
    li.innerHTML = fastHash.end
    ul.appendChild(li)
    div.appendChild(ul)

    document.querySelector("body").appendChild(div)
}