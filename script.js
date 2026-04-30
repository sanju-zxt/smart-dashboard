const sheetURL = "https://opensheet.elk.sh/1Bk7cAPgNqMlKKoryqecURyG2aP2gDZioEGQbAHODaPE/Sheet1";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {

    console.log("RAW DATA:", data);

    if (!data || data.length === 0) {
      throw new Error("No data found");
    }

    const row = data[0];

    // 🔥 Detect keys dynamically (handles spacing, case issues)
    const keys = Object.keys(row);
    console.log("Keys detected:", keys);

    const attendanceKey = keys.find(k => k.trim().toLowerCase() === "attendance");
    const tasksKey = keys.find(k => k.trim().toLowerCase() === "tasks");

    if (!attendanceKey || !tasksKey) {
      throw new Error("Column names not matching");
    }

    // 🔥 Clean values (removes unwanted characters)
    const attendance = parseInt(String(row[attendanceKey]).replace(/[^0-9]/g, ""));
    const tasks = parseInt(String(row[tasksKey]).replace(/[^0-9]/g, ""));

    if (isNaN(attendance) || isNaN(tasks)) {
      throw new Error("Invalid numeric data");
    }

    const productivity = Math.round((attendance + tasks) / 2);

    document.getElementById("attendance").innerText = attendance + "%";
    document.getElementById("tasks").innerText = tasks;
    document.getElementById("productivity").innerText = productivity + "%";

    document.getElementById("attendance-bar").style.width = attendance + "%";

    let status =
      attendance >= 85 ? "🔥 Excellent" :
      attendance >= 70 ? "⚡ Good" :
      "⚠ Low";

    document.getElementById("status").innerText = status;

  })
  .catch(err => {
    console.error("FINAL ERROR:", err);

    document.getElementById("attendance").innerText = "Check Data";
    document.getElementById("tasks").innerText = "Check Data";
    document.getElementById("status").innerText = "Debug Console";
  });
