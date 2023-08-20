

const section = document.querySelector("#section")

const income = document.querySelector('.income')

const expenses = document.querySelector('.expenses')

const owed = document.querySelector('.owed')



console.log(section.value)


section.addEventListener('change', function() {
    if (section.value === "Income") {
        income.style.display = "block";
        expenses.style.display = "none";
        owed.style.display = "none";
    } else if (section.value === "Expenses") {
        income.style.display = "none";
        expenses.style.display = "block";
        owed.style.display = "none";
    } else if (section.value === "Owed") {
        income.style.display = "none";
        expenses.style.display = "none";
        owed.style.display = "block";
    } else if (section.value === "All") {
        income.style.display = "block";
        expenses.style.display = "block";
        owed.style.display = "block";
    }
});