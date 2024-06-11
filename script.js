function getSubjects() {
  let numSubjects = document.getElementById("numOfSubjects").value;
  let inputs = "";

  for (let i = 0; i < numSubjects; i++) {
    inputs += `<input type="number" class="credit" placeholder="Enter Credit for Subject ${
      i + 1
    }">`;
    inputs += `<input type="number" class="grade" placeholder="Enter Grade for Subject ${
      i + 1
    }">`;
  }

  document.getElementById("subjectInputs").innerHTML = inputs;
}

function calculateGPA() {
  let credits = document.getElementsByClassName("credit");
  let grades = document.getElementsByClassName("grade");
  let totalCredits = 0;
  let totalPoints = 0;

  for (let i = 0; i < credits.length; i++) {
    totalCredits = totalCredits + parseInt(credits[i].value);
    totalPoints += parseInt(credits[i].value) * parseInt(grades[i].value);
  }

  let gpa = totalPoints / totalCredits;
  document.getElementById("output").innerText = `Your GPA is: ${gpa.toFixed(
    2
  )}`;
}
