const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Please enter your date of birth");
    } else {
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old.`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = (currentDate.getFullYear() - birthdayDate.getFullYear());
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    
    if ((month < 0) || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) { // We're in your birth month, but the day hasn't come yet

        age--;
    }
    return age;
}

btnEl.addEventListener("click", calculateAge);