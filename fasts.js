class Fast {
    static all = {}
    constructor(id, active, hours, minutes) {
        this.active = active
        this.id = id
        this.hours = hours
        this.minutes = minutes
        this.counterId = this.startCounter()
        this.counterFast = document.createElement("div")
        this.constructor.all = { ...this.constructor.all, [id]: this }
    }

    static findById(id) {
        return this.all[id]
    }
    startCounter() {
        return setInterval(() => {
            if (this.minutes < 60) {
                this.minutes++
            }
            else {
                this.minutes = this.minutes - 60
                this.hours++
            }
            this.counterFast.innerHTML = `${this.hours} hours and ${this.minutes} minutes`

        }, 60000)

    }
    render() {
        if (this.active = false)
            this.update(hours, minutes)
        else this.counterFast.innerHTML = `${this.hours} hours and ${this.minutes} minutes`
        const div = document.createElement("div")
        const end = document.createElement("button");
        end.innerHTML = "End Fast"
        end.setAttribute('id', `stop-${this.id}`)
        div.appendChild(end)
        div.appendChild(this.counterFast)
        const deleteF = document.createElement("button");
        deleteF.innerHTML = "Delete Fast"
        document.querySelector("body").appendChild(deleteF)
        document.querySelector("body").appendChild(div)
        document.querySelector("body").appendChild(end)
        document.getElementById(`delete-${this.id}`)
        deleteF.setAttribute('id', `delete-${this.id}`)

        end.addEventListener('click', e => {
            e.preventDefault();
            let id = e.target.getAttribute('id').slice('-')[5]
            stopFast(id)
        })
        deleteF.addEventListener('click', e => {
            e.preventDefault();
            let id = (e.target.getAttribute('id').slice('-')[7])
           
        })


    }
    update(hours, minutes) {
        this.active = false
        this.hours = hours
        this.minutes = minutes

        clearInterval(this.counterId)
        alert("Your fast time has ended")
        this.counterFast.innerHTML = `You ended your fast at ${this.hours} hours and ${this.minutes} minutes`
    }
    delete(id) {
        this.counterid.remove()
        
        // fast.remove()

    }
}



