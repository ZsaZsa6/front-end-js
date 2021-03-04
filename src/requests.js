const BASE_URL = "http://localhost:3000"
const FASTS_URL = `${BASE_URL}/fasts`
const COMMENTS_URL = `${BASE_URL}/comments`


const loadFasts = () => {
  fetch(FASTS_URL)
    .then(res => res.json())
    .then(json => {
      json.forEach(data => {
        const fast = new Fast(data.fast.id, data.fast.active, data.fast.created_at, data.fast.updated_at, data.hours, data.minutes);
        fast.render();
        data.fast.comments.forEach(comment => {
          fast.addComment(comment);
        })
      })
      new Chart().render()
    })
}

const showFasts = () => {
  fetch(FAST_URL)
    .then(res => res.json())
    .then(data => {
      new Fast(data.fast.id, data.fast.active, data.hours, data.minutes).render();
      new Comment(data.comments, data.fast.id).render();
    })
}

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
    .catch(errorHandling)
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
    .catch(errorHandling)
}

const stopFast = (id) => {
  fetch(FASTS_URL + `/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => res.json())
    .then(data => {
      Fast.findById(data.fast.id).stop(data.hours, data.minutes);
    })
    .catch(errorHandling)
}

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
  if (error) {
    alert(`Something went wrong:` + error);
  }
  else {

  }
}







