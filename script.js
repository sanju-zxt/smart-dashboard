const sheetURL = "https://opensheet.elk.sh/1Bk7cAPgNqMlKKoryqecURyG2aP2gDZioEGQbAHODaPE/Sheet1";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {

    console.log(data);

    // SAFE ACCESS (handles spacing issues)
    const row = data[0];

    const attendance = parseInt(row["Attendance"] || row["attendance"]);
    const tasks = parseInt(row["Tasks"] || row["tasks"]);

    if (isNaN(attendance) || isNaN(tasks)) {
      document.getElementById("attendance").innerText = "Fix Sheet";
      document.getElementById("tasks").innerText = "Fix Sheet";
      return;
    }

    const productivity = Math.round((attendance + tasks) / 2);

    document.getElementById("attendance").innerText = attendance + "%";
    document.getElementById("tasks").innerText = tasks;
    document.getElementById("productivity").innerText = productivity + "%";

    document.getElementById("attendance-bar").style.width = attendance + "%";

    let status = attendance >= 85 ? "🔥 Excellent" :
                 attendance >= 70 ? "⚡ Good" :
                 "⚠ Low";

    document.getElementById("status").innerText = status;

  })
  .catch(err => console.error(err));
