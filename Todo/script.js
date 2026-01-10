document.addEventListener("DOMContentLoaded",function(){
let input = document.getElementById("items");
let list = document.getElementById("todo_list");
let clearBtn = document.getElementById("clear_btn");


function todo(event)
{
    event.preventDefault(); // it will help to ignore default refreshing the page which is occurred by the button type

    let li = document.createElement("li"); // converting input items to list form
    let task =input.value.trim(); //clear empty spaces

    if(task === ""){return;} // if task is empty return nothing

    li.textContent=task; // appending input content to list
    list.append(li);
    console.log(list);

    input.value = "";//clear task


    li.addEventListener("click",function(){
         li.classList.toggle("completed");
        });
}    
    

clearBtn.addEventListener("click", function() {
    list.innerHTML = ""; // remove all tasks
});

window.todo = todo;
});
