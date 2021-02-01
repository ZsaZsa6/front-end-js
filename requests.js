const BASE_URL = "http://localhost:3000"
const FASTS_URL = `${BASE_URL}/fasts`




// Index
const loadFasts = () => {
  fetch(FASTS_URL)
    .then(res => res.json())
    .then(json => {
      json.forEach(newFastHash => {
        let fast = new Fast(newFastHash)
        fast.render();
      })
    })
}
// Show
const showFasts = () => {
  fetch(FAST_URL)
    .then(res => res.json())
    .then(json => {
      json(fastHash => {
        let fast = new Fast(fastHash)
        fast.render();
      })
    })
}


// Create

const createFast = () => {
  fetch(FASTS_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: ""
  })
    .then(res => res.json())
    .then(fast => {
      new Fast(fast).render();
    })
}

// Update 

const stopFast = (id) => {

  fetch(`${FASTS_URL}/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ active: false })
  })
    .then(res => res.json())
    .then(json => console.log(json))
    }



// updatedFast => {
//   Fast(updatedFast).update();

// Delete

const deleteFast = () => {
  fetch(FAST_URL, + `/`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
    },
    body: ""
  })
    .then(res => res.json())
    .then(json => console.log(json))
}



