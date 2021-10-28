const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = ["lead1", "lead2", "lead3"];

inputBtn.addEventListener("click", function(){
    console.log("Button clicked!");
    myLeads.push(inputEl.value);
    ulEl.innerHTML += `<li>${myLeads[myLeads.length - 1]}</li>` 
    inputEl.value = "";
});




