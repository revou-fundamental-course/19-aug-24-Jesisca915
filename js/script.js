// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah refresh halaman
    
    // Validasi form secara manual
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Pengecekan untuk setiap field
    if (name === '') {
        alert('Please enter your name');
        return; // Stop the submission if the name is empty
    }

    if (email === '') {
        alert('Please enter your email');
        return; // Stop the submission if the email is empty
    }

    if (phone === '') {
        alert('Please enter your phone number');
        return; // Stop the submission if the phone number is empty
    }

    if (message === '') {
        alert('Please enter a message');
        return; // Stop the submission if the message is empty
    }

    // Menampilkan nilai input di dalam pop-up
    document.getElementById('popup-name').innerText = name;
    document.getElementById('popup-email').innerText = email;
    document.getElementById('popup-phone').innerText = phone;
    document.getElementById('popup-message').innerText = message;

    // Menampilkan pop-up
    document.getElementById('popup').style.display = 'flex';

    // Perbarui pesan sambutan dengan nama pengguna
    document.getElementById('welcome-message').innerText = `Hi ${name}, Welcome to Website`;
});

// Handle close button
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
