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
        commentlabel.innerHTML = "Your Comment: ";
        commentForm.appendChild(commentlabel);

        const texareaelement = document.createElement('textarea');
        texareaelement.setAttribute("name", "ccomment");
        commentForm.appendChild(texareaelement);

        const submitComment = document.createElement('input');
        submitComment.setAttribute("type", "submit");
        submitComment.setAttribute("name", "dsubmit");
        submitComment.setAttribute("value", "Submit");
        commentForm.appendChild(submitComment);


        document.querySelector('form').addEventListener('submit', (e) => {
            
            // console.log(e.target.value)
            createComment({ fast_id: fastId, content: content })

        })


    }

    // static buildSubmit(fastId) {

    //     const submitComment = document.createElement('button')
    //     submitComment.innerHTML = "Submit Comment"
    //     submitComment.setAttribute('type', 'submit')
    //     document.getElementsById(`${fastId}`).appendChild(submitComment)
    //     submitComment.setAttribute('id', this.fastId)
    // }

    static displayComments() {
        const comment = document.createElement('input')
        const input = document.createElement('li')
        const ul = document.createElement('ul')
        const div = document.createElement('div')
        comment.setAttribute('id', this.fastId)
        document.querySelector('body').appendChild(div)
        document.querySelector('div').appendChild(ul)
        document.querySelector('ul').appendChild(input)
    }

    render() {


        // const Cinput = document.querySelector(commentInput)

    }
    // renderComment() {

    // }

}

