document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotPasswordLink = document.getElementById('forgotPassword');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Add your login logic here
        console.log(`Login: Username - ${username}, Password - ${password}`);
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        // Add your registration logic here
        console.log(`Register: New Username - ${newUsername}, New Password - ${newPassword}`);
    });

    forgotPasswordLink.addEventListener('click', function () {
        // Add your forgot password logic here
        console.log('Forgot Password clicked');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const studentName = document.getElementById('studentName').value;
        const fatherName = document.getElementById('fatherName').value;
        const mobileNumber = document.getElementById('mobileNumber').value;
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate mobile number
        if (!isValidMobileNumber(mobileNumber)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        // Validate username
        if (!isValidUsername(newUsername)) {
            alert("Please enter a valid username containing only letters (a-z), numbers (0-9), and underscore (_).");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match. Please re-enter.");
        } else {
            // Add your registration logic here
            console.log(`Register: 
                Student Name - ${studentName}, 
                Father Name - ${fatherName}, 
                Mobile Number - ${mobileNumber},
                New Username - ${newUsername}, 
                New Password - ${newPassword}`);

            // Display success message
            alert("Registration successful! You can now login.");


            // Clear the form
            registerForm.reset();

            // Redirect to the login page
            window.location.href = 'login.html';
        }
    });

    // Function to validate a 10-digit mobile number
    function isValidMobileNumber(number) {
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(number);
    }

    // Function to validate the username
    function isValidUsername(username) {
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        return usernameRegex.test(username);
    }
});
