// This script doesn't allow saving the task on browser's local storage

const taskField = document.querySelector("input")

document.querySelector("button").addEventListener("click", () => {
    const newListItem = document.createElement("li")
    const task = document.createTextNode(taskField.value)
    if (taskField.value !== "") {
        console.log(task);
        newListItem.appendChild(task)
        document.querySelector("ul").prepend(newListItem)
        taskField.value = "";
    }
})

document.querySelector("ul").addEventListener("click", (event) => {
    console.log(event.target.innerHTML)
    if (event.target.className == "completed") {
        event.target.className = ""
    } else {
        event.target.className = "completed"
    }

})

/* document.querySelectorAll("").forEach((item, index) => {
    item.addEventListener('click', () => {
      console.log(`Clicked on list item ${index}: ${item.textContent}`);
    });
  }); */

document.getElementById("delete").addEventListener("click", () => {
    const listItems = document.querySelectorAll("li")
    console.log(listItems);
    listItems.forEach(element => {
        if (element.className === "completed") {
            element.remove()
        }
    });
})
