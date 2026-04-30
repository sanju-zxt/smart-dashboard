// Simulated dynamic data
let attendance = 82;
let tasks = 18;
let productivity = Math.round((attendance + tasks) / 2);

// Update UI
document.getElementById("attendance").innerText = attendance + "%";
document.getElementById("tasks").innerText = tasks;
document.getElementById("productivity").innerText = productivity + "%";

// Smart status logic
let statusText = "";
let statusColor = "";

if (attendance >= 85 && tasks >= 15) {
  statusText = "🔥 Excellent Performance";
  statusColor = "#22c55e";
} else if (attendance >= 70) {
  statusText = "⚡ Good Progress";
  statusColor = "#eab308";
} else {
  statusText = "⚠ Needs Improvement";
  statusColor = "#ef4444";
}

const statusElement = document.getElementById("status");
statusElement.innerText = statusText;
statusElement.style.color = statusColor;
