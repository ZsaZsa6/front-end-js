class Fast {
    static all = {}
    constructor(id, active, hours, minutes) {
        this.active = active
        this.id = id
        this.hours = hours
        this.minutes = minutes
        this.counterFast = document.createElement("div")
        this.counterFast.innerHTML = `${this.hours} hours and ${this.minutes} minutes`
        this.counterId = this.startCounter()
        this.comments = {}
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
        const div = document.createElement('div')
        
        div.setAttribute('id', `fast-${this.id}`)
        document.querySelector("body").appendChild(div)
        div.appendChild(this.counterFast)
        const ul = document.createElement('ul')
        ul.setAttribute('id', `comment-list-${this.id}`)
        div.appendChild(ul)

        
        Comment.buildCommentForm(this.id);
        this.buildUpdateFast();
        this.buildDeleteButton();
    }


    buildUpdateFast() {

        // const div = document.createElement("div")
        const end = document.createElement("button");

        // document.querySelector("body").appendChild(div)
        document.getElementById(`fast-${this.id}`).appendChild(end)
        end.innerHTML = "End Fast"
        end.setAttribute('id', `stop-${this.id}`)
        end.addEventListener('click', () => stopFast(this.id))
    }



    stopFast() {

        if (this.active = false) {
            this.update(hours, minutes)
        } else {
            this.counterFast.innerHTML = `${this.hours} hours and ${this.minutes} minutes`
        }
    }

    update(hours, minutes) {
        this.active = false
        this.hours = hours
        this.minutes = minutes


        clearInterval(this.counterId)
        alert("Your fast time has ended")
        this.counterFast.innerHTML = `You ended your fast at ${this.hours} hours and ${this.minutes} minutes`
    }


    buildDeleteButton() {

        // const div = document.createElement("div")
        
        const deleteF = document.createElement("button");
        deleteF.innerHTML = "Delete Fast"
        // document.querySelector("body").appendChild(div)
        document.getElementById(`fast-${this.id}`).appendChild(deleteF)
        deleteF.setAttribute('id', `delete-${this.id}`)
        deleteF.addEventListener('click', () => deleteFast(this.id))
    }



    delete() {

        document.getElementById(`fast-${this.id}`).remove()
        // const submitComment = document.getElementById(this.comments.findById(`${Comment.fastId}`))
        // submitComment.remove()
    }

    addComment(comment) {

        const newComment = new Comment(comment.content, comment.id, this.id)
        this.comments = { ...this.comments, [comment.id]: newComment }
        newComment.render();
    }
}






