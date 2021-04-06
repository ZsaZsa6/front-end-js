document.addEventListener("DOMContentLoaded", () => {

    const create = document.createElement("button");
    create.innerHTML = "Create Fast"
    create.setAttribute('id', 'createB')
    create.setAttribute('class', 'create-button')
    document.querySelector("body").appendChild(create)
    const toggle = document.createElement("button")
    toggle.innerHTML = "Toggle Dark Mode"
    document.querySelector("body").appendChild(toggle)
    toggle.addEventListener('click', () => {var element = document.body;
            element.classList.toggle("darkmode")})
    
    create.addEventListener('click', () => {
        alert("Your fast time has begun")
        createFast();
    })
    loadFasts()
    
})
