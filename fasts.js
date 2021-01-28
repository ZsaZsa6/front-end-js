// let nIntervalId
const counterFast = document.createElement("counter");
// let buttons = document.getElementsByTagName('button');



document.addEventListener("DOMContentLoaded", () => loadFasts())

class Fast {
    constructor(fastHash) {
        this.active = fastHash.active
        this.createdAt = fastHash.created_at
        this.updatedAt = fastHash.updated_at
    }
    // nIntervalId = setInterval(startFast, 1000);


    render() {
        const div = document.createElement("div")

        const start = document.createElement("button");
        start.innerHTML = startFast()
        const end = document.createElement("button");
        end.innerHTML = endFast()
        div.appendChild(start)
        div.appendChild(end)
        document.querySelector("body").appendChild(div)
    }
    
}
    start.addEventListener('click', () => {
        document.addEventListener(createFast())
            alert("Your fast time has begun")
        })    
    end.addEventListener("click", () => {
        document.addEventListener(stopFast())
            alert("Your fast time has ended, enjoy your feast")
        })
    
        
        // document.addEventListener(createFast())
        startFast() 
        counterFast = (startInterval, 1000)
        this.active = true
        this.createdAt = Time.now     

    


        // startInterval when starting fast
        // clearInterval when ending fast(updated_at in update action)
        // start button turns green when activated, red when not
        // end button turns red when inactive, green when fast is ended

       
    


