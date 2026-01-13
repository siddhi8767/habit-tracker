function addHabit() {
    const input = document.getElementById("habitInput");
    const habitText = input.value.trim();

    if (habitText === "") {
        return;
    }

    const li = document.createElement("li");
li.textContent = habitText;

li.addEventListener("click", function () {
    li.classList.toggle("completed");
});

document.getElementById("habitList").appendChild(li);


    input.value = "";
}
