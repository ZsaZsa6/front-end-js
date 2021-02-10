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
        const fastdiv = document.getElementById(`fast-${fastId}`)
        
        const commentForm = document.createElement('form')
        commentForm.setAttribute('id', `form-${fastId}`)
        commentForm.setAttribute('action', "")
        commentForm.setAttribute('method', 'post')
        fastdiv.appendChild(commentForm)

        const heading = document.createElement('h4');
        heading.innerHTML = "Comment on your fast: ";
        commentForm.appendChild(heading);

        const commentlabel = document.createElement('label');
        commentForm.appendChild(commentlabel);

        let textareaelement = document.createElement('textarea');
        textareaelement.setAttribute("name", "ccomment");
        commentForm.appendChild(textareaelement);

        const submitComment = document.createElement('input');
        submitComment.setAttribute("type", "submit");
        submitComment.setAttribute("name", "dsubmit");
        submitComment.setAttribute("value", "Submit");
        commentForm.appendChild(submitComment);


        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault()
            createComment({ fast_id: fastId, content: textareaelement.value })
            textareaelement.value = ""
        })


    }

    render() {
       
        const comment = document.createElement('li')
        comment.setAttribute('id', `comment-${this.id}`)
        comment.innerHTML = this.content
        const ul = document.getElementById(`comment-list-${this.fastId}`)
        ul.appendChild(comment)

    }
    

}

