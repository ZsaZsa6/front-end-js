document.addEventListener("DOMContentLoaded", () => loadDays())

const renderDay = (dayHash) => {
    const div = document.createElement("div")
    const ul = document.createElement("ul")
    const li = document.createElement("li")

    li.innerHTML = dayHash.name_of_day
    li.innerHTML = dayHash.total_hours_fasted
    ul.appendChild(li)
    div.appendChild(ul)

    document.querySelector("body").appendChild(div)
}