// let nIntervalId

// let buttons = document.getElementsByTagName('button');





class Fast {
    constructor(newFastHash) {
        this.active = newFastHash.fast.active
        this.id = newFastHash.fast.id
        this.hours = newFastHash.hours
        this.minutes = newFastHash.minutes
    }
    render() {
        const div = document.createElement("div")
        const counterFast = document.createElement("div");
        counterFast.innerHTML = `${this.hours} hours and ${this.minutes} minutes`
        setInterval(() => {
            if (this.minutes < 60){
                this.minutes++
            }
            else { 
                this.minutes = this.minutes - 60
                this.hours++
            }
            counterFast.innerHTML = `${this.hours} hours and ${this.minutes} minutes`
            
        }, 60000)
        
        const end = document.createElement("button");
        end.innerHTML = "End Fast"
        
        div.appendChild(end)
        div.appendChild(counterFast)
        document.querySelector("body").appendChild(div)
        document.querySelector("body").appendChild(end)
        



        end.addEventListener('click', () => {
            // alert("Your fast time has ended, enjoy your feast")
            stopFast()
        })

        // fastlist= for update array of fasts(by id)

    }
}



