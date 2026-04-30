const sheetURL = "https://opensheet.elk.sh/1Bk7cAPgNqMlKKoryqecURyG2aP2gDZioEGQbAHODaPE/Sheet1";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {

    console.log("DATA RECEIVED:", data);

    if (!data || data.length === 0) {
      throw new Error("No data");
    }

    const row = data[0];

    // 🔥 DIRECT + SAFE ACCESS
    const attendance = Number(row.Attendance);
    const tasks = Number(row.Tasks);

    console.log("Attendance:", attendance);
    console.log("Tasks:", tasks);

    if (!attendance || !tasks) {
      throw new Error("Values not parsed");
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
    console.error("REAL ERROR:", err);

    document.getElementById("attendance").innerText = "Debug";
    document.getElementById("tasks").innerText = "Debug";
    document.getElementById("status").innerText = "Check Console";
  });
