document.addEventListener("DOMContentLoaded", () => {

    const create = document.createElement("button");
    create.innerHTML = "Create Fast"

    document.querySelector("body").appendChild(create)
    create.addEventListener('click', () => {
        alert("Your fast time has begun")
        createFast()
    })
    loadFasts()
})





// const endPoint = 'http://localhost:3000/fasts';
//         fetch(endPoint)
//           .then(res => res.json())
//           .then(json => console.document.querySelector('id')
// .addEventListener('click', e => {
//     const id = parseInt(e.target.dataset.id);
//     const fast = fast.findById(id);
//     console.log(fast);
// });log(json));
//       });