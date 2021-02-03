class Comment {
    static all = {}
    constructor(content, id, fastId) {
        this.content = content
        this.id = id
        this.fastId = fastId
    }
    static findById(id) {
        return this.all[id]
    }
    static buildCommentForm() {
        const commentForm = document.createElement('form')
        const div = document.createElement('div')
        document.querySelector('body').appendChild(div)
        document.querySelector('div').appendChild(commentForm)

        const commentInput = document.createElement('input')
        document.querySelector('div').appendChild(commentInput)
    }
    static buildSubmitButton() {
        const submitComment = document.createElement('button')
        submitComment.innerHTML = "Submit Comment"
        submitComment.setAttribute('type', 'submit')
        document.querySelector('body').appendChild(submitComment)
        submitComment.setAttribute('id', this.fastId)
        submitComment.addEventListener('submit', createComment)

    }
    static buildComments() {
        const comment = document.createElement('li')
        const li = document.createElement('li')
        const ul = document.createElement('ul')
        const div = document.createElement('div')
        comment.setAttribute('id', this.fastId)
        document.querySelector('body').appendChild(div)
        document.querySelector('div').appendChild(ul)
        document.querySelector('ul').appendChild(comment)

    }



render() {

    // const comment = document.createElement('li')
    // const li = document.createElement('li')
    // const ul = document.createElement('ul')
    // const div = document.createElement('div')
    // comment.setAttribute('id', this.fastId)
    // document.querySelector('body').appendChild(div)
    // document.querySelector('div').appendChild(ul)
    // document.querySelector('ul').appendChild(comment)

}

 
}

