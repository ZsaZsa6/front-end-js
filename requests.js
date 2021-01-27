const BASE_URL = "http://localhost:3000"

const FASTS_URL = `${BASE_URL}/fasts`
const FAST_URL = `${BASE_URL}/fast`
const DAYS_URL = `${BASE_URL}/days`

const loadFasts = () => {        
    fetch(FASTS_URL)
    .then(res => res.json())
    .then (json => { 
      json.forEach(fast => renderFast(fast))
  

    })

}

const loadDays = () => {
  fetch(DAYS_URL)
  .then(res => res.json())
  .then(jsoon => {
    json.forEach(day => renderDay(day))
  })
}
