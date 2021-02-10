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
        const comment = document.getElementById('comment-form')
        
        const commentForm = document.createElement('form')
        commentForm.setAttribute('id', `${fastId}`)
        commentForm.setAttribute('action', "")
        commentForm.setAttribute('method', 'post')
        comment.appendChild(commentForm)

        const heading = document.createElement('h4');
        heading.innerHTML = "Comment on your fast: ";
        commentForm.appendChild(heading);

        const commentlabel = document.createElement('label');
        commentForm.appendChild(commentlabel);

        const textareaelement = document.createElement('textarea');
        textareaelement.setAttribute("name", "ccomment");
        textareaelement.setAttribute('id', `${fastId}`)
        commentForm.appendChild(textareaelement);

        const submitComment = document.createElement('input');
        submitComment.setAttribute("type", "submit");
        submitComment.setAttribute("name", "dsubmit");
        submitComment.setAttribute("value", "Submit");
        commentForm.appendChild(submitComment);


        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault()
            createComment({ fast_id: fastId, content: textareaelement.value })

        })


    }

    render() {
       
        const input = document.createElement('li')
        input.innerHTML = this.content
    }
    

}

