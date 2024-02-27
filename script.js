const todoList=[];

renderTodo();

function renderTodo(){
    let displayItem='';
    todoList.forEach((item)=>{
        const html=`<li>${item}</li>`
        displayItem+=html;
    })

    document.querySelector(".result").innerHTML=displayItem;
}

function addTodo(){
    const inputElement=document.querySelector(".todo-input");
    const input=inputElement.value;

    todoList.push(input);
    console.log(todoList);

    inputElement.value='';
    renderTodo();
}