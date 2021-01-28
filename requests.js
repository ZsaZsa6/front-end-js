const BASE_URL = "http://localhost:3000"

const FASTS_URL = `${BASE_URL}/fasts`
const FAST_URL = `${BASE_URL}/fast`



// Index
const loadFasts = () => {
  fetch(FASTS_URL)
  .then(res => res.json())
  .then(json => {
    json.map(fastHash => {
      let fast = new Fast(fastHash)
      fast.render();
  })
})
}

const showFasts = () => {
  fetch(FAST_URL)
  .then(res => res.json())
  .then(json => console.log(json))
}
// create
// let _data = {


const createFast = () => {
  fetch(FASTS_URL, {
    method: "POST"
  })
  .then(res => res.json())
  .then(json => console.log(json))
  }

// update
const stopFast = () => {
  fetch(FAST_URL, {
    method: "PATCH"
  })
  .then(res => res.json())
  .then(json => console.log(json))
}

const deleteFast = () => {
  fetch(FAST_URL, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(json => console.log(json))
}

