// Import the functions we need from the Firebase SDKs
import { initializeApp }from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Initialize Firebase using the config object from index.html
const app = initializeApp(window.firebaseConfig);
const auth = getAuth(app);

// --- Get Element References (Same as before) ---
const loginNavBtn = document.getElementById('login-nav-btn');
const ctaBtn = document.getElementById('cta-btn');
const backToHomeBtn = document.getElementById('back-to-home');

const landingPage = document.getElementById('landing-page');
const loginPage = document.getElementById('login-page');

const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

// --- Functions to Toggle Pages (Same as before) ---

/**
 * Hides the landing page and shows the login page.
 */
function showLoginPage() {
    landingPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
}

/**
 * Hides the login page and shows the landing page.
 */
function showLandingPage() {
    loginPage.classList.add('hidden');
    landingPage.classList.remove('hidden');
    loginMessage.textContent = ''; // Clear any login messages
}

// --- Event Listeners (Same as before) ---
loginNavBtn.addEventListener('click', showLoginPage);
ctaBtn.addEventListener('click', showLoginPage);

backToHomeBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the link from navigating
    showLandingPage();
});

// --- Handle Login Form Submission (UPDATED) ---
// We make the function "async" to use "await" for the Firebase call
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Stop the form from submitting normally

    // Get values from the form
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Display a loading message
    loginMessage.textContent = 'Logging in...';
    loginMessage.style.color = 'blue';

    try {
        // --- This is the REAL Firebase call ---
        // It replaces the "setTimeout" simulation
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        // Signed in successfully
        const user = userCredential.user;
        loginMessage.textContent = `Success! Welcome back, ${user.email}`;
        loginMessage.style.color = 'green';
        
        // In a real app, you would now redirect to a member dashboard
        // Example: setTimeout(() => { window.location.href = '/dashboard.html'; }, 1000);

    } catch (error) {
        // --- Handle Firebase Errors ---
        const errorCode = error.code;
        console.error("Login Error:", errorCode);

        // Show a user-friendly message
        switch (errorCode) {
            case 'auth/user-not-found':
                loginMessage.textContent = 'No account found with this email.';
                break;
            case 'auth/wrong-password':
                loginMessage.textContent = 'Incorrect password. Please try again.';
                break;
            case 'auth/invalid-email':
                loginMessage.textContent = 'Please enter a valid email address.';
                break;
            default:
                loginMessage.textContent = 'Error logging in. Please try again later.';
        }
        loginMessage.style.color = 'red';
    }
});