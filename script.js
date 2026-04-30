const sheetURL = "https://opensheet.elk.sh/YOUR_SHEET_ID/Sheet1";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {
    const attendance = parseInt(data[0].Attendance);
    const tasks = parseInt(data[0].Tasks);
    const productivity = Math.round((attendance + tasks) / 2);

    document.getElementById("attendance").innerText = attendance + "%";
    document.getElementById("tasks").innerText = tasks;
    document.getElementById("productivity").innerText = productivity + "%";

    let statusText = "";
    let statusColor = "";

    if (attendance >= 85 && tasks >= 15) {
      statusText = "🔥 Excellent";
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
  });
