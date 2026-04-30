const firebaseConfig = {
  apiKey: "AIzaSyBvd-t8jfrBRpee87Ha_7M628B5k2XsHYA",
  authDomain: "smart-dashboard-9bc0a.firebaseapp.com",
  projectId: "smart-dashboard-9bc0a",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Signup success"))
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch(err => alert(err.message));
}
