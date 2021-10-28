const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
let myLeads = [];
let leadsFromLocal = JSON.parse(localStorage.getItem("Lead"));

if(leadsFromLocal){
    myLeads = leadsFromLocal
    renderLeads()
}else{
    console.log("No leads to show yet")
}


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    localStorage.setItem("Lead", JSON.stringify(myLeads));
    inputEl.value = "";
    renderLeads()
});

deleteBtn.addEventListener("click", function(){
    myLeads = [];
    ulEl.innerHTML = "";
    localStorage.clear();
    leadsFromLocal = []
})

function renderLeads(){
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">${myLeads[i]}</a></li>` 
        
    } 
    ulEl.innerHTML = listItems;
}








