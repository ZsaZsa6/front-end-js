class Comment {
    static all = {}
    constructor(content, id, fastId) {
        this.content = content
        this.id = id
        this.fastId = fastId
    }
    static findById(id) {
        return this.constructor.all[id]
    }
    static buildCommentForm(fastId) {
        const commentForm = document.createElement('form')
        commentForm.setAttribute('id', 'comment-form')
        document.querySelector('div').appendChild(commentForm)


        // commentForm.addEventListener('submit', (e) => {
            document.querySelector('form').addEventListener('submit', (e) => {
                console.log(e.target.value)
                debugger

            } )
            createComment({fast_id: fastId})
        
        const div = document.createElement('div')
        document.querySelector('body').appendChild(div)

        const commentInput = document.createElement('input')
        // document.querySelector('#comment-form').appendChild(submitComment)
        
        document.querySelector('div').appendChild(commentInput)
    }
    static buildSubmitButton(fastId) {
        const submitComment = document.createElement('button')
        submitComment.innerHTML = "Submit Comment"
        submitComment.setAttribute('type', 'submit')
        document.querySelector('#comment-form').appendChild(submitComment)
        submitComment.setAttribute('id', this.fastId)


    }

    render() {

        const comment = document.createElement('li')
        const li = document.createElement('li')
        const ul = document.createElement('ul')
        const div = document.createElement('div')
        comment.setAttribute('id', this.fastId)
        document.querySelector('body').appendChild(div)
        document.querySelector('div').appendChild(ul)
        document.querySelector('ul').appendChild(comment)

    }


}

