let courseList = [];
let totalCredits = 0;
let totalPoints = 0;

$(document).ready(function() {
  $('#calculateBtn').click(function() {
    calculateCGPA();
  });
});

function calculateCGPA() {
  const courseInput = $('#course');
  const gradeInput = $('#grade');
  const creditInput = $('#credit');
  const resultDiv = $('#result');
  const courseListDiv = $('#courseList');

  const courseName = courseInput.val();
  const grade = gradeInput.val();
  const credit = parseInt(creditInput.val());

  if (courseName.trim() === '') {
    resultDiv.text('Please enter a valid course name.');
    return;
  }

  if (isNaN(credit)) {
    resultDiv.text('Please select a valid credit hours value.');
    return;
  }

  courseList.push({ courseName, grade, credit });

  const courseItem = $('<div></div>').html(`${courseName} - Grade: ${grade} - Credit Hours: ${credit}`);
  courseListDiv.append(courseItem);

  totalPoints += calculateGradePoints(grade) * credit;
  totalCredits += credit;

  courseInput.val('');
  gradeInput.val('A+');
  creditInput.val('1');

  const cgpa = calculateCGPAValue();
  resultDiv.text(`Your CGPA: ${cgpa.toFixed(2)}`);
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
