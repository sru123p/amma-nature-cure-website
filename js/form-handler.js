// Form Submission
const appointmentForm = document.getElementById('appointment-form');
if(appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Here you would typically send the data to your server
        // For demo purposes, we'll just log it and show an alert
        console.log('Form submitted:', data);
        
        alert('Thank you for your appointment request! We will contact you shortly to confirm.');
        this.reset();
        
        // Example of sending data to a server (would need backend implementation)
        /*
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you for your appointment request! We will contact you shortly to confirm.');
            this.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your request. Please try again later.');
        });
        */
    });
}