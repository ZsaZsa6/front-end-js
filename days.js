document.addEventListener("DOMContentLoaded", () => loadDays())


class Day {
    constructor (dayHash) {
        this.nameOfDay = dayHash.name_of_day
        this.date = dayHash.date
        this.totalHoursFasted = dayHash.total_hours_fasted
    }
    render () {
        const div = document.createElement("div")
        const ul = document.createElement("ul")
        const li = document.createElement("li")
    
        li.innerHTML = `${this.date}, ${this.nameOfDay} - ${this.totalHoursFasted} hours fasted`
        // li.innerHTML = this.total_hours_fasted
        ul.appendChild(li)
        div.appendChild(ul)
    
        document.querySelector("body").appendChild(div)
    }
}
