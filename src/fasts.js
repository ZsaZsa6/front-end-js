class Fast {
    static all = {}
    constructor(id, active, createdAt, updatedAt, hours, minutes) {
        this.active = active
        this.id = id
        this.createdAt = createdAt
        this.updatedAt = new Date(updatedAt)
        this.feastHours = 24 - this.hours
        this.hours = hours
        this.minutes = minutes
        this.counterFast = document.createElement("div")
        this.counterFast.innerHTML = `Please wait one minute while your current fast loads.`
        this.counterId = this.startCounter()
        this.comments = {}
        this.constructor.all = { ...this.constructor.all, [id]: this }
    }

    static findById(id) {
        return this.all[id]
    }

    startCounter() {
        if (this.active === false) {
            this.counterFast.innerHTML = `You fasted ${this.hours} hours and ${this.minutes} minutes and ended your fast on ${this.updatedAt.toDateString()}.`
        }
        else {
            setInterval(() => {
                if (this.minutes <= 59) {
                    this.minutes++
                }
                else {
                    this.minutes = this.minutes - 60
                    this.hours++
                }
                this.counterFast.innerHTML = `You have been fasting for ${this.hours} hours and ${this.minutes} minutes`
                this.active === true
            }, 60000)
        }
    }

    render() {
        const div = document.createElement('div')
        div.setAttribute('id', `fast-${this.id}`)
        div.setAttribute('class', 'fast')
        document.querySelector("body").appendChild(div)
        this.counterFast.setAttribute('id', 'counter-fast')
        div.appendChild(this.counterFast)
        const ul = document.createElement('ul')
        ul.setAttribute('class', 'fast-ul')
        ul.setAttribute('id', `comment-list-${this.id}`)
        div.appendChild(ul)
        if (this.active === true) {
            Comment.buildCommentForm(this.id);
            this.buildUpdateFast();
            document.getElementById('createB').disabled = true;
        } else {
            this.buildDeleteButton()
        }
    }

    buildUpdateFast() {
        const end = document.createElement("button");
        document.getElementById(`fast-${this.id}`).appendChild(end)
        end.innerHTML = "End Fast"
        end.setAttribute('id', `stop-${this.id}`)
        end.addEventListener('click', (e) => {stopFast(this.id)
            e.preventDefault()})
    }

    stop(hours, minutes) {
        this.active = false
        this.hours = hours
        this.minutes = minutes
        if (this.active === false) {
            clearInterval(this.counterFast)
            alert("Your fast time has ended")
            this.counterFast.innerHTML = `You ended your fast at ${this.hours} hours and ${this.minutes} minutes. You must wait at least one minute before deleting this fast.`
            document.getElementById('createB').disabled = false;
            document.getElementById(`stop-${this.id}`).disabled = true;
            document.getElementById(`form-${this.id}`).remove();
        } else {
            this.counterFast.innerHTML = `You've been fasting for ${this.hours} hours and ${this.minutes} minutes`

        }
    }

    buildDeleteButton() {
        const deleteF = document.createElement("button");
        deleteF.innerHTML = "Delete Fast"
        document.getElementById(`fast-${this.id}`).appendChild(deleteF)
        deleteF.setAttribute('id', `delete-${this.id}`)
        deleteF.addEventListener('click', () => deleteFast(this.id))

    }

    delete() {
        document.getElementById(`fast-${this.id}`).remove()
    }

    addComment(comment) {
        const newComment = new Comment(comment.content, comment.id, this.id)
        this.comments = { ...this.comments, [comment.id]: newComment }
        newComment.render();
    }
}
