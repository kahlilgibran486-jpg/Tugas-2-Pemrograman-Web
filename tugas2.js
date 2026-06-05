function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Hapus</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}