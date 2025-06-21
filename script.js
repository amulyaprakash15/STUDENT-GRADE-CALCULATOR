document.getElementById('gradeForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const marks = Array.from(document.querySelectorAll('.mark')).map(input => parseFloat(input.value));
    const totalMarks = marks.reduce((sum, val) => sum + val, 0);
    const average = (totalMarks / marks.length).toFixed(2);
  
    let grade;
    if (average >= 90) {
      grade = "A+";
    } else if (average >= 80) {
      grade = "A";
    } else if (average >= 70) {
      grade = "B";
    } else if (average >= 60) {
      grade = "C";
    } else if (average >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    document.getElementById('total').textContent = totalMarks;
    document.getElementById('average').textContent = average;
    document.getElementById('grade').textContent = grade;
    document.getElementById('result').classList.remove('hidden');
  });
  