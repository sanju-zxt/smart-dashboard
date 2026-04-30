# 🚀 Smart Student Monitoring System

A **cloud-based student performance dashboard** that tracks attendance, tasks, and productivity in real-time using **Google Sheets + Firebase + GitHub Pages**.

---

## 🌐 Live Demo

👉 https://sanju-zxt.github.io/smart-dashboard/

---

## 📌 Overview

This project is a **modern web dashboard** designed to monitor student performance efficiently.
It integrates **authentication, real-time data fetching, and visualization** into a clean UI.

---

## ✨ Features

* 🔐 **User Authentication (Firebase)**
* 📊 **Real-time Data from Google Sheets**
* 📈 **Performance Visualization (Chart.js)**
* ⚡ **Dynamic Status Indicator**
* ⏳ **Loading State + Error Handling**
* 🌐 **Deployed on GitHub Pages**
* 🧠 **Smart Data Parsing (handles errors & typos)**

---

## 🛠 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Authentication:** Firebase Auth
* **Database:** Google Sheets API
* **Visualization:** Chart.js
* **Hosting:** GitHub Pages

---

## 📂 Project Structure

```
smart-dashboard/
│
├── index.html        # Redirect to login
├── login.html        # Authentication page
├── dashboard.html    # Main dashboard
├── auth.js           # Firebase authentication logic
├── script.js         # Data fetching + UI logic
├── style.css         # Styling
└── README.md
```

---

## 🔐 Authentication Flow

1. User logs in via Firebase
2. Redirected to dashboard
3. Dashboard is protected (no login → no access)
4. Logout returns to login page

---

## 📊 Data Flow

* Data stored in **Google Sheets**
* Fetched using API:

  ```
  https://opensheet.elk.sh/{sheet_id}/Sheet1
  ```
* Parsed dynamically (handles:

  * spelling issues like *Attendence*
  * invalid values
    )

---

## 🧠 Status Logic

| Attendance | Status       |
| ---------- | ------------ |
| ≥ 85%      | 🔥 Excellent |
| 70–84%     | ⚡ Good       |
| < 70%      | ⚠ Low        |

---

## 🚀 Setup & Run Locally

1. Clone repo:

```bash
git clone https://github.com/sanju-zxt/smart-dashboard.git
```

2. Open `login.html` in browser

3. Configure Firebase (if needed)

---

## 📌 Use Cases

* 🎓 Colleges & Universities
* 🏫 Coaching Institutes
* 📊 Student Productivity Tracking
* 📈 Performance Monitoring Systems

---

## 🔮 Future Improvements

* 👤 User-specific dashboards
* 🛠 Admin panel for editing data
* 📩 Automated email alerts
* 🤖 AI-based performance prediction

---

## 👨‍💻 Author

**Sanju**
📧 [ssanju200610@gmail.com](mailto:ssanju200610@gmail.com)

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share your feedback!

---

📄 License

This project is open-source and available under the MIT License.
