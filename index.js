const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocal = JSON.parse(localStorage.getItem("Lead"));

let myLeads = [];

if(leadsFromLocal){
    myLeads = leadsFromLocal
    render(myLeads)
}

function render(paramLeads){
    let listItems = "";
    for (let i = 0; i < paramLeads.length; i++) {
        listItems += `<li><a href="${paramLeads[i]}" target="_blank" rel="noopener noreferrer">${paramLeads[i]}</a></li>`   
    } 
    ulEl.innerHTML = listItems;
}

tabBtn.addEventListener("click", function(){
    let queryOptions = { active: true, currentWindow: true}
    chrome.tabs.query(queryOptions, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("Lead", JSON.stringify(myLeads));
        render(myLeads)
    });
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    localStorage.setItem("Lead", JSON.stringify(myLeads));
    inputEl.value = "";
    render(myLeads)
});

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads)
})








