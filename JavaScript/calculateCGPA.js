let courseList = [];
let totalCredits = 0;
let totalPoints = 0;

function calculateCGPA() {
  const courseInput = document.getElementById('course');
  const gradeInput = document.getElementById('grade');
  const creditInput = document.getElementById('credit');
  const resultDiv = document.getElementById('result');
  const courseListDiv = document.getElementById('courseList');

  const courseName = courseInput.value;
  const grade = gradeInput.value;
  const credit = parseInt(creditInput.value);

  if (courseName.trim() === '') {
    resultDiv.textContent = 'Please enter a valid course name.';
    return;
  }

  if (isNaN(credit)) {
    resultDiv.textContent = 'Please select a valid credit hours value.';
    return;
  }

  courseList.push({ courseName, grade, credit });

  const courseItem = document.createElement('div');
  courseItem.innerHTML = `${courseName} - Grade: ${grade} - Credit Hours: ${credit}`;
  courseListDiv.appendChild(courseItem);

  totalPoints += calculateGradePoints(grade) * credit;
  totalCredits += credit;

  courseInput.value = '';
  gradeInput.value = 'A+';
  creditInput.value = '1';

  const cgpa = calculateCGPAValue();
  resultDiv.textContent = `Your CGPA: ${cgpa.toFixed(2)}`;
}

function calculateGradePoints(grade) {
  switch (grade) {
    case 'A+':
      return 4.00;
    case 'A':
      return 4.00;
    case 'A-':
      return 3.70;
    case 'B+':
      return 3.30;
    case 'B':
      return 3.00;
    case 'B-':
      return 2.70;
    case 'C+':
      return 2.30;
    case 'C':
      return 2.00;
    case 'C-':
      return 1.70;
    case 'D+':
      return 1.30;
    case 'D':
      return 1.00;
    case 'F':
      return 0.00;
    default:
      return 0.00;
  }
}

function calculateCGPAValue() {
  return totalPoints / totalCredits;
}
