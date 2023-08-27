let list_container = document.getElementById("list_container");
let addBtn = document.getElementById('btn');
let inputBox = document.getElementById("searchbox");
let main_container = document.querySelector('#main_container');
// main_container.style.background='red';
main_container.style.height = '100vh';
addBtn.addEventListener('click', () => {
    if (inputBox.value === "") {
        alert("Please insert the Task in the Input Box");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        list_container.appendChild(li);
        let span = document.createElement('span');
        let date = document.createElement('span');
        span.innerHTML = "\u00d7";
        // date.innerHTML = `${inputBox.value} - Created on: ${getCurrentDateTime()}`;
        li.appendChild(span);
        // li.appendChild(span);
        // main_container.style.height='auto';
    }
    inputBox.value = "";
    saveData();
})
list_container.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
    console.log(e);
}, false);

function saveData() {
    localStorage.setItem('data', list_container.innerHTML);
}
function showData() {
    list_container.innerHTML = localStorage.getItem('data');
}
showData();

function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} at ${time}`;
}