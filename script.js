const sheetURL = "https://opensheet.elk.sh/1Bk7cAPgNqMlKKoryqecURyG2aP2gDZioEGQbAHODaPE/Sheet1";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {

    console.log("FULL DATA:", data);

    const row = data[0];

    console.log("ROW:", row);
    console.log("KEYS:", Object.keys(row));

    // Show raw values on UI (no parsing yet)
    document.getElementById("attendance").innerText = row.Attendance;
    document.getElementById("tasks").innerText = row.Tasks;

  })
  .catch(err => {
    console.error("ERROR:", err);
  });
