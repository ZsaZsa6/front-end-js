class Comment {
    static all = {}
    constructor(comments, id) {
        this.comments = comments
        this.id = id
    }
    static findById(id) {
        return this.all[id]
    }
    render() {
        this.buildComments();
        this.buildCommentForm();
        this.buildInputField();
        this.buildSubmitButton();

    }

    buildCommentForm() {
        const commentForm = document.createElement('form')
        commentForm.setAttribute('content', "Comment")
        commentForm.setAttribute("id", `${this.id}`)
        document.querySelector('body').appendChild(commentForm)
    }

    buildInputField() {
        const commentInput = document.createElement('input')
        commentInput.setAttribute("id", `${this.id}`)
        document.querySelector('body').appendChild(commentInput)
    }
    buildComments() {
        const comments = document.createElement('li')
        comments.setAttribute("id", `${this.id}`)
        const div = document.createElement('div')
        const ul = document.createElement('ul', `${this.id}`)
        document.querySelector('body').appendChild(div)
        document.querySelector('div').appendChild(ul)
        document.querySelector('ul', `${this.id}`).appendChild(comments)
    }
    buildSubmitButton() {
        const submitComment = document.createElement('button')
        submitComment.innerHTML = "Submit Comment"
        submitComment.setAttribute('type', 'submit')
        document.querySelector('body').appendChild(submitComment)
        submitComment.setAttribute('id', `${this.id}`)
        submitComment.addEventListener('submit', (e) => {
            let id = e.target.getAttribute('id', `${this.id}`)
            this.findById(`${this.id}`)
            // createFast()

        })
    }

    delete() {
        document.getElementById(`${this.id}`).remove()
        this.comments.remove()
        this.findById(id).remove()

    }

}

//         Input 
// Div
// Body
// Form
// Button 
// Li
// Ul


