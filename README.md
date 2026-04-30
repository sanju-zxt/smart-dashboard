# 🚀 Smart Student Monitoring System

A **cloud-based student performance dashboard** that tracks attendance, tasks, and productivity in real-time using **Google Sheets + Firebase + GitHub Pages**.

---

## 🌐 Live Demo

👉 https://sanju-zxt.github.io/smart-dashboard/

---

## 📸 Preview

A modern dashboard with authentication, live data, and performance visualization.

---

## 📌 Overview

The **Smart Student Monitoring System** is a lightweight full-stack web application designed to:

* Track student performance
* Visualize key metrics
* Provide real-time insights
* Ensure secure access using authentication

It demonstrates **practical integration of frontend + cloud services**, making it suitable for real-world deployment scenarios.

---

## ✨ Features

* 🔐 **Secure Authentication**

  * Firebase-based login & signup
  * Protected dashboard routes

* 📊 **Live Data Integration**

  * Fetches real-time data from Google Sheets
  * No backend server required

* 📈 **Interactive Dashboard**

  * Attendance tracking
  * Task monitoring
  * Productivity calculation
  * Status indicator

* 🧠 **Smart Data Handling**

  * Handles column typos (e.g., *Attendence*)
  * Cleans invalid values automatically

* ⚡ **Enhanced User Experience**

  * Loading state
  * Error handling
  * Responsive layout

* 🌐 **Cloud Deployment**

  * Hosted using GitHub Pages
  * Fully accessible online

---

## 🛠 Tech Stack

| Category    | Technology              |
| ----------- | ----------------------- |
| Frontend    | HTML, CSS, JavaScript   |
| Auth        | Firebase Authentication |
| Data Source | Google Sheets API       |
| Charts      | Chart.js                |
| Hosting     | GitHub Pages            |

---

## 📂 Project Structure

```id="struct"
smart-dashboard/
│
├── index.html        # Redirects to login page
├── login.html        # User authentication
├── dashboard.html    # Main dashboard UI
├── auth.js           # Firebase authentication logic
├── script.js         # Data fetching & UI updates
├── style.css         # Styling and layout
└── README.md
```

---

## 🔐 Authentication Flow

```id="flow"
User → Login Page → Firebase Auth → Dashboard Access
                         ↓
                   Unauthorized → Redirect to Login
```

* Only authenticated users can access the dashboard
* Session is maintained using Firebase

---

## 📊 Data Flow

1. Data stored in **Google Sheets**
2. Accessed via API:

   ```
   https://opensheet.elk.sh/{sheet_id}/Sheet1
   ```
3. Parsed and displayed dynamically

✔ No backend server required
✔ Fully cloud-based architecture

---

## 🧠 Status Logic

| Attendance | Status       |
| ---------- | ------------ |
| ≥ 85%      | 🔥 Excellent |
| 70–84%     | ⚡ Good       |
| < 70%      | ⚠ Low        |

---

## 🚀 Setup & Run Locally

1. Clone the repository:

```bash id="clone"
git clone https://github.com/sanju-zxt/smart-dashboard.git
```

2. Open the project folder

3. Run:

```id="run"
Open login.html in your browser
```

4. (Optional) Configure your own Firebase project

---

## 📌 Use Cases

* 🎓 Colleges & Universities
* 🏫 Coaching Institutes
* 📊 Student Performance Tracking
* 📈 Productivity Monitoring Systems

---

## 🔮 Future Enhancements

* 👤 User-specific dashboards (each user sees own data)
* 🛠 Admin panel for managing data
* 📩 Automated email alerts
* 🤖 AI-based performance predictions

---

## 👨‍💻 Author

**Sanju**
📧 [ssanju200610@gmail.com](mailto:ssanju200610@gmail.com)

---

## ⭐ Support

If you found this project useful:

* ⭐ Star the repository
* 🍴 Fork it
* 📢 Share it

---

## 📄 License

This project is open-source and available under the MIT License.
