// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {

    // Check if we are on the login page by seeing if the login form exists
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    
    if (loginForm && signupForm) {
        setupAuthForms();
    }
});

/**
 * Sets up all event listeners for the authentication forms (login/signup)
 */
function setupAuthForms() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    
    // Get the links that toggle between the forms
    const showSignupLink = document.getElementById("show-signup");
    const showLoginLink = document.getElementById("show-login");

    // Get error message containers
    const loginError = document.getElementById("login-error");
    const signupError = document.getElementById("signup-error");

    // --- Toggle Links ---
    showSignupLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        loginError.style.display = "none"; // Hide errors when toggling
    });

    showLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        signupError.style.display = "none"; // Hide errors when toggling
    });

    // --- Form Submission Handlers ---

    // Login Form
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        // Reset error
        loginError.style.display = "none";
        loginError.textContent = "";

        // !! FIREBASE STUB !!
        // Check if Firebase is defined. If not, run demo mode.
        if (typeof firebase === 'undefined' || !firebase.auth) {
            console.warn("Firebase not configured. Running in demo mode.");
            // Simulate a successful login for demo purposes
            alert(`Demo Mode: Logged in with ${email}`);
            // In a real app, you'd redirect:
            // window.location.href = "dashboard.html";
            return;
        }

        // --- REAL FIREBASE LOGIC (once configured) ---
        /*
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log("User logged in:", userCredential.user);
                window.location.href = "dashboard.html"; // Redirect to a dashboard
            })
            .catch((error) => {
                console.error("Login error:", error);
                loginError.textContent = error.message;
                loginError.style.display = "block";
            });
        */
    });

    // Signup Form
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        const confirmPassword = document.getElementById("signup-confirm-password").value;

        // Reset error
        signupError.style.display = "none";
        signupError.textContent = "";

        // Simple client-side validation
        if (password !== confirmPassword) {
            signupError.textContent = "Passwords do not match.";
            signupError.style.display = "block";
            return;
        }

        // !! FIREBASE STUB !!
        // Check if Firebase is defined. If not, run demo mode.
        if (typeof firebase === 'undefined' || !firebase.auth) {
            console.warn("Firebase not configured. Running in demo mode.");
            // Simulate a successful signup
            alert(`Demo Mode: Account created for ${email}`);
            // In a real app, you'd log them in and redirect:
            // window.location.href = "dashboard.html";
            return;
        }

        // --- REAL FIREBASE LOGIC (once configured) ---
        /*
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log("User created:", userCredential.user);
                // You might want to save more user info to Firestore here
                window.location.href = "dashboard.html"; // Redirect to a dashboard
            })
            .catch((error) => {
                console.error("Signup error:", error);
                signupError.textContent = error.message;
                signupError.style.display = "block";
            });
        */
    });
}