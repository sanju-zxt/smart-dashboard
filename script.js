const sheetURL = "https://opensheet.elk.sh/1Bk7cAPgNqMlKKoryqecURyG2aP2gDZioEGQbAHODaPE/Sheet1";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {

    console.log("FULL DATA:", data);

    if (!data || data.length === 0) {
      throw new Error("No data found");
    }

    const row = data[0];

    console.log("ROW:", row);

    // 🔥 Dynamically detect correct keys (handles spaces + case issues)
    const attendanceKey = Object.keys(row).find(k => k.trim().toLowerCase() === "attendance");
    const tasksKey = Object.keys(row).find(k => k.trim().toLowerCase() === "tasks");

    console.log("Detected Keys:", attendanceKey, tasksKey);

    if (!attendanceKey || !tasksKey) {
      throw new Error("Column names not matching");
    }

    // 🔥 Clean values (removes unwanted characters like 60q → 60)
    const attendance = parseInt(String(row[attendanceKey]).replace(/[^0-9]/g, ""));
    const tasks = parseInt(String(row[tasksKey]).replace(/[^0-9]/g, ""));

    console.log("Parsed:", attendance, tasks);

    if (isNaN(attendance) || isNaN(tasks)) {
      throw new Error("Invalid numeric data");
    }

    const productivity = Math.round((attendance + tasks) / 2);

    // ✅ Update UI
    document.getElementById("attendance").innerText = attendance + "%";
    document.getElementById("tasks").innerText = tasks;
    document.getElementById("productivity").innerText = productivity + "%";

    document.getElementById("attendance-bar").style.width = attendance + "%";

    // ✅ Status logic
    let status =
      attendance >= 85 ? "🔥 Excellent" :
      attendance >= 70 ? "⚡ Good" :
      "⚠ Low";

    document.getElementById("status").innerText = status;

  })
  .catch(err => {
    console.error("FINAL ERROR:", err);

    // ❌ Show fallback UI instead of breaking
    document.getElementById("attendance").innerText = "Check Data";
    document.getElementById("tasks").innerText = "Check Data";
    document.getElementById("productivity").innerText = "--%";
    document.getElementById("status").innerText = "Debug Console";
  });
