document.addEventListener("DOMContentLoaded", () => {

    const create = document.createElement("button");
    create.innerHTML = "Create Fast"
    create.setAttribute('id', 'createB')
    document.querySelector("body").appendChild(create)
    create.addEventListener('click', () => {
        alert("Your fast time has begun")
        createFast();
    })
    loadFasts()
    
})
