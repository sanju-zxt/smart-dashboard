const sheetURL = "https://opensheet.elk.sh/1Bk7cAPgNqMlKKoryqecURyG2aP2gDZioEGQbAHODaPE/Sheet1";

const loading = document.getElementById("loading");

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {

    if (!data || data.length === 0) throw "No data";

    const row = data[0];

    // Handle spelling issues
    const attendance = parseInt(row["Attendance"] || row["Attendence"]);
    const tasks = parseInt(row["Tasks"]);

    if (isNaN(attendance) || isNaN(tasks)) throw "Invalid data";

    const productivity = Math.round((attendance + tasks) / 2);

    // UI update
    document.getElementById("attendance").innerText = attendance + "%";
    document.getElementById("tasks").innerText = tasks;
    document.getElementById("productivity").innerText = productivity + "%";

    document.getElementById("attendance-bar").style.width = attendance + "%";

    // Status UI
    const statusEl = document.getElementById("status");

    if (attendance >= 85) {
      statusEl.innerHTML = "🔥 Excellent";
      statusEl.style.color = "#22c55e";
    } else if (attendance >= 70) {
      statusEl.innerHTML = "⚡ Good";
      statusEl.style.color = "#eab308";
    } else {
      statusEl.innerHTML = "⚠ Low";
      statusEl.style.color = "#ef4444";
    }

    // Chart
    new Chart(document.getElementById("chart"), {
      type: "bar",
      data: {
        labels: ["Attendance", "Tasks"],
        datasets: [{
          label: "Performance",
          data: [attendance, tasks]
        }]
      }
    });

    loading.style.display = "none";

  })
  .catch(err => {
    console.error(err);

    document.getElementById("attendance").innerText = "Error";
    document.getElementById("tasks").innerText = "Error";
    document.getElementById("status").innerText = "Check Data";

    loading.innerText = "⚠ Failed to load data";
  });
