const BASE_URL = "http://localhost:3000"

const FASTS_URL = `${BASE_URL}/fasts`
const FAST_URL = `${BASE_URL}/fast`
const DAYS_URL = `${BASE_URL}/days`

const loadFasts = () => {
  fetch(FASTS_URL)
    .then(res => res.json())
    .then(json => {
      json.forEach(fastHash => {
        let fast = new Day(fastHash)
        fast.render();
      })

      })
    }
    

const loadDays = () => {
  fetch(DAYS_URL)
    .then(res => res.json())
    .then(json => {
      json.forEach(dayHash => {
        let day = new Day(dayHash)
        day.render();
      })
    })
}
