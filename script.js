const sheetURL = "https://opensheet.elk.sh/1Bk7cAPgNqMlKKoryqecURyG2aP2gDZioEGQbAHODaPE/Sheet1";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {

    console.log("DATA:", data);

    const row = data[0];

    // DIRECT ACCESS (since your keys are correct now)
    const attendance = parseInt(row.Attendance);
    const tasks = parseInt(row.Tasks);

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

    let status = attendance >= 85 ? "🔥 Excellent"
               : attendance >= 70 ? "⚡ Good"
               : "⚠ Low";

    document.getElementById("status").innerText = status;

  })
  .catch(err => {
    console.error(err);
    document.getElementById("attendance").innerText = "API Error";
  });
