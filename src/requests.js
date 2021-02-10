const BASE_URL = "http://localhost:3000"
const FASTS_URL = `${BASE_URL}/fasts`
const COMMENTS_URL = `${BASE_URL}/comments`




// Index
const loadFasts = () => {
  fetch(FASTS_URL)
    .then(res => res.json())
    .then(json => {
      json.forEach(data => {
       const fast = new Fast(data.fast.id, data.fast.active, data.hours, data.minutes);
       data.fast.comments.forEach(comment => {
        fast.addComment(comment)
       } )
       fast.render();
      })

    })
}
// Show
const showFasts = () => {
  fetch(FAST_URL)
    .then(res => res.json())
    .then(data => {
      new Fast(data.fast.id, data.fast.active, data.hours, data.minutes).render();
      new Comment(data.comments, data.fast.id).render();
    })
}
// Create
const createComment = (comment) => {
  fetch(COMMENTS_URL, {
    method: "POST",
    headers: {
       'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      
     comment
    )
  })
    .then(res => res.json())
    .then(comment => {
      Fast.findById(comment.fast_id).addComment(comment)

    })

}
const createFast = () => {

  fetch(FASTS_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: ""
  })
    .then(res => res.json())
    .then(data => {
      new Fast(data.fast.id, data.fast.active, data.hours, data.minutes).render();
    })
}
// Update 

const stopFast = (id) => {
  fetch(FASTS_URL + `/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => res.json())
    .then(data => {
      Fast.findById(data.fast.id).update(data.hours, data.minutes);
    })
    .catch(errorHandling)
}
// Delete
const deleteFast = (id) => {
  fetch(FASTS_URL + `/${id}`, {
    method: "DELETE"

  })
    .then(() => {
      Fast.findById(id).delete();
      Comment.findById(id).delete();
    })
    .catch(errorHandling)
}


const errorHandling = (error) => {
  // let element = document.createElement('div')
  // element.setAttribute('class', 'danger')
  // let alert = alert(element)
  // alert.$el.innerText = error.message
  // document.querySelector('body').appendChild(alert.$el)
}


