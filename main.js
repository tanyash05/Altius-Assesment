function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.registrationForm.name.value.trim();
    const email = document.registrationForm.email.value.trim();
    const password = document.registrationForm.password.value.trim();

    if (!name || !email || !password) {
        alert("All fields are required!");
        return false;
    }
    
    console.log("User registered with", { name, email, password });
    alert("Registration Successful!");
    return true;
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const profilePic = document.getElementById('profile-pic');
        profilePic.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

document.addEventListener('DOMContentLoaded', () => {
    const OTPform = document.getElementById('otp-form');
    OTPform.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.registrationForm.email.value;
        try {
            const response = await fetch(`/api/sendOTP?email=${email}`);
            const result = await response.json();
            alert(result.message);
            if (result.success) {
                window.location.href = 'verify.html';
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    });
});