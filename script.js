const habitList = document.getElementById("habitList");

function addHabit() {
    const input = document.getElementById("habitInput");
    const habitText = input.value.trim();

    if (habitText === "") return;

    createHabit(habitText, false);
    input.value = "";

    saveHabits();
}

function createHabit(text, completed) {
    const li = document.createElement("li");
    li.textContent = text;

    if (completed) {
        li.classList.add("completed");
    }

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        saveHabits();
    });

    habitList.appendChild(li);
}

function saveHabits() {
    const habits = [];

    document.querySelectorAll("#habitList li").forEach(li => {
        habits.push({
            text: li.textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("habits", JSON.stringify(habits));
}

function loadHabits() {
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];

    storedHabits.forEach(habit => {
        createHabit(habit.text, habit.completed);
    });
}

loadHabits();
