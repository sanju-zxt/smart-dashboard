// paste your config here
const firebaseConfig = {
  apiKey: "PASTE_FROM_FIREBASE",
  authDomain: "PASTE",
  projectId: "PASTE"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Signup successful"))
    .catch(err => alert(err.message));
}

// Login
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Login successful"))
    .catch(err => alert(err.message));
}
