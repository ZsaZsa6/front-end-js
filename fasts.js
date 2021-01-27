document.addEventListener("DOMContentLoaded", () => loadFasts())
class Fast{
    constructor(fastHash) {
        this.start = fastHash.start
        this.end = fastHash.end
    }
    render (){
    let start = document.createElement("startbutton");
     // button.innerHTML = startFast

    start.addEventListener ("click", function() {
        alert("Your fast time has begun");
      });
    let end = document.createElement("endbutton");
     // button.innerHTML = endFast
     end.addEventListener ("click", function() {
        alert("Your fast time has ended, enjoy your feast");
      });
    
   
    let body = document.getElementsByTagName("body")[0]
    body.appendChild(startButton);
    let body = document.getElementsByTagName("body")[1];
    div.appendChild(endButton);
}
 }
    