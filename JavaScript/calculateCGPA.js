let totalCredits = 0;
let totalPoints = 0;

function calculateCGPA() {
  const gradeInput = document.getElementById('grade');
  const creditInput = document.getElementById('credit');
  const resultDiv = document.getElementById('result');

  const grade = parseFloat(gradeInput.value);
  const credit = parseInt(creditInput.value);

  if (isNaN(grade) || isNaN(credit)) {
    resultDiv.textContent = 'Please enter valid grade and credit hours.';
    return;
  }

  totalPoints += grade * credit;
  totalCredits += credit;

  gradeInput.value = '';
  creditInput.value = '1';

  const cgpa = totalPoints / totalCredits;
  resultDiv.textContent = 'Your CGPA: ' + cgpa.toFixed(2);
}