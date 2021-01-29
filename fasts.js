// let nIntervalId

// let buttons = document.getElementsByTagName('button');





class Fast {
    constructor(newFastHash) {
        this.active = newFastHash.fast.active
        this.id = newFastHash.fast.id
        this.hours = newFastHash.hours
        this.minutes = newFastHash.minutes
        Fast.all.push(this)
    }


    static findById = (id)  => {
        return this.all.find(fast => fast.id === id)
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
        end.setAttribute('id',`${this.id}`)
        // let ebutton = document.getElementById(`${this.id}`)

        

       
        // div.appendChild(delete)
        div.appendChild(end)
        div.appendChild(counterFast)
        // document.querySelector("body").appendChild(delete)
        document.querySelector("body").appendChild(div)
        document.querySelector("body").appendChild(end)
        
       document.getElementById(`${this.id}`).addEventListener('click', () => {
            alert("Your fast time has ended, enjoy your feast")
            stopFast(`${this.id}`)
        //    Fast.findById(id)
            
            counterFast.innerHTML = `Your Fast ended at ${this.hours} hours and ${this.minutes} minutes`
        

       })

    }
} 
Fast.all = []



