class Comment {

    constructor(comments, id) {
        this.comments = comments
        this.id = id
        // this.content = comment.content
    }
    render() {
        const comments = document.createElement('li')
        const commentInput = document.createElement('comment-input')
        comments.innerText = commentInput["value"];
        const commentForm = document.createElement('comment-form')
        // commentForm.setAttribute('type', 'text')
        commentForm.setAttribute('content', "Comment")
        commentForm.setAttribute("id", `${this.id}`)
        commentInput.setAttribute('type', 'text')
        commentInput.setAttribute('placeholder', 'Comment')


        const ul = document.createElement('ul')
        const div = document.createElement('div')
        const submitComment = document.createElement('button')
        submitComment.innerHTML = "Submit Comment"
        submitComment.setAttribute('type', 'submit')
        submitComment.setAttribute('id', `${this.id}`)

        document.querySelector('body').appendChild(div)
        document.querySelector('body').appendChild(submitComment)
        document.querySelector('body').appendChild(commentForm)
        document.querySelector('body').appendChild(commentInput)
        document.querySelector('div').appendChild(ul)
        document.querySelector('ul').appendChild(comments)

        
        submitComment.addEventListener('submit', addComment => {
            let id = e.target.getAttribute('id', `${this.id}`)
        
            
            addComment(id)
            commentForm.setAttribute('content', "Comment")
            commentForm.setAttribute("id", `${this.id}`)
            commentInput.setAttribute('type', 'text')
            commentInput.setAttribute('placeholder', 'Comment')
            commentInput.setAttribute('style', 'cols="30" rows="10"')
            
            document.forms["comment-form"].reset()
        })
        

    }
}




// submit.addEventListener('click', addComment)

// const submit = document.getElementById('submit');
// f

//     let commentInput = document.getElementById("comment-input")["value"];
//     uComments.innerText = commentInput;

//     document.forms["comment-form"].reset();

//   }


// HTML
// <h3>Comments</h3>


//     <h3>Leave a comment</h3>

//     <form id="comment-form" action="">
//       <input type='text' name="comment" id="comment-input" cols="30" rows="10">
//       </br>
//       <button id='submit'>submit</button>
//     </form>