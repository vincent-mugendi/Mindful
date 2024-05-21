document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('http://localhost:5000/signup', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Signup successful!');
        } else {
            alert('Signup failed.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Signup failed.');
    });
});

