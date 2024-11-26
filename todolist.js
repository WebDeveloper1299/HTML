const todolist = [];

function todolists() {
  const todoelement = document.querySelector(".todoinput");
  const tododates = document.querySelector(".tododate")
  todolist.push({
    name:todoelement.value,
    date:tododates.value
  })

  let htmls = ''; 

  for (let i = 0; i < todolist.length; i++) {
    let value = todolist[i];
    htmls += `<div>${value.name}</div>
    <div>${value.date}</div>
  <button 
  class="delete"
  onclick="
  todolist.splice(${i},1)
  "
  >Delete</button>
    `; 
    
  }
  
  document.querySelector(".container").innerHTML = htmls;
}

