import React, { useState } from "react";

const DashboardScreen: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("main");

  const stats = {
    totalStudents: 10,
    averageGPA: 3.67,
    topStudent: "Amna Ashraf",
    currentSemester: "7th",
    totalCourses: 8,
    attendanceRate: "92%",
  };

  // Function to render detail views
  const renderDetail = () => {
    switch (activeSection) {
      case "students":
        return (
          <div style={detailBox}>
            <h3>👩‍🎓 Student Details</h3>
            <p>
              There are <strong>10 students</strong> currently enrolled across
              different semesters. Top performers include <strong>Tania Zulfiqer</strong>, <strong>Saba Norreen</strong>, and <strong>Amna Ashraf</strong>.
            </p>
            <button style={backButton} onClick={() => setActiveSection("main")}>
              ⬅ Back to Dashboard
            </button>
          </div>
        );
      case "courses":
        return (
          <div style={detailBox}>
            <h3>📚 Course Overview</h3>
            <p>
              Total <strong>8 courses</strong> this semester. Core subjects
              include <strong>Computer Science</strong>, <strong>Database Systems</strong>, and
              <strong> Operating Systems</strong>.
            </p>
            <button style={backButton} onClick={() => setActiveSection("main")}>
              ⬅ Back to Dashboard
            </button>
          </div>
        );
      case "attendance":
        return (
          <div style={detailBox}>
            <h3>📈 Attendance Report</h3>
            <p>
              The average attendance rate is <strong>92%</strong>. Most students
              maintain excellent consistency.
            </p>
            <button style={backButton} onClick={() => setActiveSection("main")}>
              ⬅ Back to Dashboard
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  if (activeSection !== "main") return renderDetail();

  return (
    <div style={container}>
      {/* Header */}
      <div style={header}>🎓 Student Dashboard</div>

      {/* Cards */}
      <div style={grid}>
        <div style={cardStyle} onClick={() => setActiveSection("students")}>
          <h3 style={titleStyle}>👩‍🎓 Total Students</h3>
          <p style={numberStyle}>{stats.totalStudents}</p>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>📊 Average GPA</h3>
          <p style={numberStyle}>{stats.averageGPA}</p>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>🏅 Top Student</h3>
          <p style={textStyle}>{stats.topStudent}</p>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>📆 Current Semester</h3>
          <p style={textStyle}>{stats.currentSemester}</p>
        </div>

        <div style={cardStyle} onClick={() => setActiveSection("courses")}>
          <h3 style={titleStyle}>📚 Total Courses</h3>
          <p style={numberStyle}>{stats.totalCourses}</p>
        </div>

        <div style={cardStyle} onClick={() => setActiveSection("attendance")}>
          <h3 style={titleStyle}>📈 Attendance Rate</h3>
          <p style={numberStyle}>{stats.attendanceRate}</p>
        </div>
      </div>

      {/* Summary */}
      <div style={summaryBox}>
        <h3 style={{ color: "#007bff", fontWeight: 600 }}>📘 Summary</h3>
        <p style={{ color: "#333", marginTop: "10px" }}>
          Currently <strong>{stats.totalStudents}</strong> students are enrolled
          across <strong>{stats.totalCourses}</strong> courses. The average GPA
          is <strong>{stats.averageGPA}</strong>, and attendance stands at{" "}
          <strong>{stats.attendanceRate}</strong>.
        </p>
      </div>
    </div>
  );
};

// Styles
const container: React.CSSProperties = {
  backgroundColor: "#f5f7fa",
  minHeight: "100vh",
  padding: "20px",
  fontFamily: "Poppins, sans-serif",
  color: "#222",
};

const header: React.CSSProperties = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "15px",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "1.6rem",
  fontWeight: "bold",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "25px",
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  padding: "20px",
  textAlign: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

const titleStyle: React.CSSProperties = {
  color: "#007bff",
  fontSize: "1.1rem",
  fontWeight: "600",
};

const numberStyle: React.CSSProperties = {
  fontSize: "2rem",
  color: "#222",
  fontWeight: "700",
  marginTop: "8px",
};

const textStyle: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: "600",
  color: "#444",
  marginTop: "8px",
};

const summaryBox: React.CSSProperties = {
  marginTop: "40px",
  backgroundColor: "#e9f3ff",
  borderRadius: "10px",
  padding: "20px",
  textAlign: "center",
};

const detailBox: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "12px",
  maxWidth: "700px",
  margin: "50px auto",
  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const backButton: React.CSSProperties = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "10px 20px",
  marginTop: "20px",
  cursor: "pointer",
};

export default DashboardScreen;
