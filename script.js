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

    // ✅ HANDLE BOTH SPELLINGS (IMPORTANT FIX)
    const attendance = parseInt(
      row["Attendance"] || row["Attendence"]
    );

    const tasks = parseInt(row["Tasks"]);

    console.log("Parsed:", attendance, tasks);

    if (isNaN(attendance) || isNaN(tasks)) {
      throw new Error("Invalid numeric data");
    }

    const productivity = Math.round((attendance + tasks) / 2);

    // ✅ UI UPDATE
    document.getElementById("attendance").innerText = attendance + "%";
    document.getElementById("tasks").innerText = tasks;
    document.getElementById("productivity").innerText = productivity + "%";

    document.getElementById("attendance-bar").style.width = attendance + "%";

    // ✅ STATUS
    let status =
      attendance >= 85 ? "🔥 Excellent" :
      attendance >= 70 ? "⚡ Good" :
      "⚠ Low";

    document.getElementById("status").innerText = status;

    // ✅ CHART
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
    console.error("FINAL ERROR:", err);

    document.getElementById("attendance").innerText = "Error";
    document.getElementById("tasks").innerText = "Error";
    document.getElementById("productivity").innerText = "--%";
    document.getElementById("status").innerText = "Check Console";
  });
