const apiUrl = 'http://localhost:5000/api/students';

// Fetch students on page load
window.onload = function() {
  getStudents();
};

function getStudents() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('students');
      list.innerHTML = '';
      data.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name} (${student.email})`;
        list.appendChild(li);
      });
    })
    .catch(err => console.error('Error fetching students:', err));
}

function addStudent() {
  const name = document.getElementById('studentName').value;
  const email = document.getElementById('studentEmail').value;

  if (!name || !email) {
    alert('Please fill all fields');
    return;
  }

  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById('studentName').value = '';
    document.getElementById('studentEmail').value = '';
    getStudents();
  })
  .catch(err => console.error('Error adding student:', err));
}
