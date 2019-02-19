const form = document.querySelector('.form__submit');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const counter = document.querySelector('.counter');
const tasks = document.getElementsByClassName('task');
const search = document.querySelector('#search');
let memoryTasks = [];

const addTask = (e) => {
    e.preventDefault();
    const task = input.value;
    if(!task) return;
    const li = document.createElement('li');
    li.classList.add('task');
    li.innerHTML = `<span>${task}</span><button class="remove">Usuń</button>`;
    ul.appendChild(li);
    memoryTasks.push(li);
    input.value = '';
    counter.textContent = [...tasks].length;
    li.querySelector('button').addEventListener('click', removeTask);
}

const removeTask = (e) => {
    const toRemove = e.target.parentElement.querySelector('span').textContent
    memoryTasks = memoryTasks.filter(item => !item.querySelector('span').textContent.includes(toRemove))
    e.target.parentElement.remove();
    counter.textContent = tasks.length;
}

const searchTask = (e) => {
    const content = e.target.value.toLowerCase();
    let taskList = memoryTasks.filter(task => task.textContent.toLowerCase().includes(content));
    ul.textContent = '';
    taskList.forEach(task=>ul.appendChild(task))
}




search.addEventListener('input', searchTask);
form.addEventListener('submit', addTask);