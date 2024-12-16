document.getElementById("addButton").addEventListener("click", function() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();

    if (itemText !== "") {
        addItemToList(itemText);
        itemInput.value = ""; 
        itemInput.focus(); 
    } else {
        alert("Por favor, insira um item válido.");
    }
});

function addItemToList(text) {
    const ul = document.getElementById("itemList");
    const li = document.createElement("li");

    li.innerHTML = `
        ${text} 
        <button onclick="removeItem(this)">X</button>
    `;

    ul.appendChild(li);
}

function removeItem(button) {
    const li = button.parentElement;
    li.remove();
}
