const sheetURL = "https://opensheet.elk.sh/1Bk7cAPgNqMlKKoryqecURyG2aP2gDZioEGQbAHODaPE/Sheet1";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {

    console.log("DATA:", data); // debug

    // NEW STRUCTURE
    const attendance = parseInt(data[0]["Attendance"]);
    const tasks = parseInt(data[0]["Tasks"]);

    // SAFETY CHECK
    if (isNaN(attendance) || isNaN(tasks)) {
      document.getElementById("attendance").innerText = "Error";
      document.getElementById("tasks").innerText = "Error";
      return;
    }

    const productivity = Math.round((attendance + tasks) / 2);

    document.getElementById("attendance").innerText = attendance + "%";
    document.getElementById("tasks").innerText = tasks;
    document.getElementById("productivity").innerText = productivity + "%";

    document.getElementById("attendance-bar").style.width = attendance + "%";

    // STATUS
    let statusText = "";
    let statusColor = "";

    if (attendance >= 85) {
      statusText = "🔥 Excellent";
      statusColor = "#22c55e";
    } else if (attendance >= 70) {
      statusText = "⚡ Good";
      statusColor = "#eab308";
    } else {
      statusText = "⚠ Low";
      statusColor = "#ef4444";
    }

    const statusElement = document.getElementById("status");
    statusElement.innerText = statusText;
    statusElement.style.color = statusColor;

    // CHART
    const ctx = document.getElementById("chart").getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Attendance", "Tasks"],
        datasets: [{
          label: "Performance",
          data: [attendance, tasks]
        }]
      }
    });

  })
  .catch(err => {
    console.error("Error:", err);
  });
