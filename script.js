const sheetURL = "https://opensheet.elk.sh/1Bk7cAPgNqMlKKoryqecURyG2aP2gDZioEGQbAHODaPE/Sheet1";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {

    const row = data[0];

    const attendance = parseInt(
      row["Attendance"] || row["Attendence"]
    );

    const tasks = parseInt(row["Tasks"]);

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

  });
