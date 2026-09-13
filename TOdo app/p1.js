
let todoList=[];
displayItems();


function addTodo(){
    //todo-input
    let inputElement=document.querySelector('#todo-input');
    let todoItem=inputElement.value;
    //todo-date
    let dateElement=document.querySelector('#todo-date');
    let tododate=dateElement.value;
    todoList.push({item: todoItem , dueDate: tododate});
    inputElement.value='';        //after adding value it should dissapear from the input box
    dateElement.value='';
    displayItems();
}

function displayItems(){
    let containerElement =document.querySelector('.todo-container');
    let newHTML='';
    for(let i=0;i<todoList.length;i++){
        let{item,dueDate}=todoList[i];   //destructureing the object which is inside array
        
        newHTML+=`
        
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class='btn-delete' onclick="todoList.splice(${i}, 1);
                displayItems();">Delete</button>    
    `;
    }
    //now put this html block of code in the todo-container--> no need to retrieve old data as we are already running through the whole array
    containerElement.innerHTML=newHTML;
}