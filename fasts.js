document.addEventListener("DOMContentLoaded", () => loadFasts())

const renderFast = (fastHash) => {

    let startButton = document.createElement("startbutton");
     // button.innerHTML = startFast

    startButton.addEventListener ("click", function() {
        alert("Your fast time has begun");
      });
    let endButton = document.createElement("endbutton");
     // button.innerHTML = endFast
     endButton.addEventListener ("click", function() {
        alert("Your fast time has ended, enjoy your feast");
      });
    
   
    let body = document.getElementsByTagName("body")[0]
    body.appendChild(startButton);
    // let body = document.getElementsByTagName("endbutton");
    // div.appendChild(endButton)

    
    
    
}