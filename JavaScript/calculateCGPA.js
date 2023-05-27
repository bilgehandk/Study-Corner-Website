let totalCredits = 0;
let totalPoints = 0;

function calculateCGPA() {
  const gradeInput = document.getElementById('grade');
  const creditInput = document.getElementById('credit');
  const resultDiv = document.getElementById('result');
  const courseListDiv = document.getElementById('courseList');

  const grade = parseFloat(gradeInput.value);
  const credit = parseInt(creditInput.value);

  if (isNaN(grade) || grade < 0 || grade > 4 || isNaN(credit)) {
    resultDiv.textContent = 'Please enter valid grade and credit hours.';
    return;
  }

  totalPoints += grade * credit;
  totalCredits += credit;

  gradeInput.value = '';
  creditInput.value = '1';

  const cgpa = totalPoints / totalCredits;
  resultDiv.textContent = 'Your CGPA: ' + cgpa.toFixed(2);

  // Create a new course entry
  const courseEntry = document.createElement('div');
  courseEntry.className = 'course-entry';

  const gradeSpan = document.createElement('span');
  gradeSpan.textContent = ' Grade: ' + grade.toFixed(1);
  courseEntry.appendChild(gradeSpan);

  const creditSpan = document.createElement('span');
  creditSpan.textContent = ' Credit Hours: ' + credit;
  courseEntry.appendChild(creditSpan);

  courseListDiv.appendChild(courseEntry);
}
