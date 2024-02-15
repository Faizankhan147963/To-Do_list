let searchInput = document.querySelector(".searchInput");
let todolist = document.querySelector(".todolist");
let Add = document.querySelector(".Add");
let edittodo = null;
Add.addEventListener("click", (e) => {
          e.preventDefault()
          let inputvalue = searchInput.value;
          if (inputvalue.length <= 0) {
                    alert("Enter Todo")
          } else {
                    get_todo(inputvalue);
          }
})

function get_todo(data) {
          if (Add.innerHTML === "Edit") {
                    Add.innerHTML = "Add";
                    edittodo.target.previousElementSibling.innerHTML = searchInput.value;
                    searchInput.value = "";
          } else {
                    searchInput.value = ""
                    let li = document.createElement("li");
                    let p = document.createElement("p");
                    p.innerHTML = data;
                    li.appendChild(p);

                    let updateButton = document.createElement("button");
                    updateButton.textContent = "update";
                    updateButton.classList.add("update")
                    li.appendChild(updateButton);


                    let removeButton = document.createElement("button");
                    removeButton.textContent = "remove";
                    removeButton.classList.add("remove")

                    li.appendChild(removeButton)
                    todolist.appendChild(li)
          }
}


function Update(e) {
          if (e.target.innerHTML === "remove") {
                    todolist.removeChild(e.target.parentElement)
          } else if (e.target.innerHTML === "update") {
                    console.log(e.target.previousElementSibling.innerHTML);
                    Add.innerHTML = "Edit"
                    searchInput.value = e.target.previousElementSibling.innerHTML;
                    edittodo = e;
          }
}

todolist.addEventListener("click", Update);