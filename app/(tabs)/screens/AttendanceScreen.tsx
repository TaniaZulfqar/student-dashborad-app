import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Student = {
  id: string;
  name: string;
  rollNo: string;
  totalClasses: number;
  attendedClasses: number;
  attendancePercent: number;
  subjectWise?: { subject: string; percent: number }[];
};

export default function AttendanceScreen() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const students: Student[] = [
    {
      id: "1",
      name: "Tania Zulfiqer",
      rollNo: "BSCS-001",
      totalClasses: 40,
      attendedClasses: 36,
      attendancePercent: 90,
      subjectWise: [
        { subject: "Data Structures", percent: 88 },
        { subject: "Database Systems", percent: 92 },
        { subject: "Computer Science", percent: 85 },
      ],
    },
    {
      id: "2",
      name: "Saba Noreen",
      rollNo: "BSCS-002",
      totalClasses: 40,
      attendedClasses: 38,
      attendancePercent: 95,
      subjectWise: [
        { subject: "Data Structures", percent: 75 },
        { subject: "Database Systems", percent: 82 },
        { subject: "Computer Science", percent: 84 },
      ],
    },
    {
      id: "3",
      name: "Amna Ashraf",
      rollNo: "BSCS-003",
      totalClasses: 40,
      attendedClasses: 38,
      attendancePercent: 95,
      subjectWise: [
        { subject: "Data Structures", percent: 93 },
        { subject: "Database Systems", percent: 97 },
        { subject: "Computer Science", percent: 95 },
      ],
    },
    {
      id: "4",
      name: "Aneesha Shareef",
      rollNo: "BSCS-004",
      totalClasses: 40,
      attendedClasses: 30,
      attendancePercent: 70,
      subjectWise: [
        { subject: "Data Structures", percent: 70 },
        { subject: "Database Systems", percent: 65 },
        { subject: "Computer Science", percent: 80 },
      ],
    },
    {
      id: "5",
      name: "Fiza Arshad",
      rollNo: "BSCS-005",
      totalClasses: 40,
      attendedClasses: 38,
      attendancePercent: 95,
      subjectWise: [
        { subject: "Data Structures", percent: 93 },
        { subject: "Database Systems", percent: 97 },
        { subject: "Computer Science", percent: 95 },
      ],
    },
    {
      id: "6",
      name: "Fatima Alvi",
      rollNo: "BSCS-006",
      totalClasses: 40,
      attendedClasses: 36,
      attendancePercent: 95,
      subjectWise: [
        { subject: "Data Structures", percent: 90 },
        { subject: "Database Systems", percent: 88 },
        { subject: "Computer Science", percent: 89 },
      ],
    },
    {
      id: "7",
      name: "Sonia Alvi",
      rollNo: "BSCS-007",
      totalClasses: 40,
      attendedClasses: 38,
      attendancePercent: 95,
      subjectWise: [
        { subject: "Data Structures", percent: 93},
        { subject: "Database Systems", percent: 95 },
        { subject: "Computer Science", percent: 92 },
      ],
    },
    {
      id: "8",
      name: "Zoha Imraan",
      rollNo: "BSCS-008",
      totalClasses: 40,
      attendedClasses: 30,
      attendancePercent: 88,
      subjectWise: [
        { subject: "Data Structures", percent: 85 },
        { subject: "Database Systems", percent: 84 },
        { subject: "Computer Science", percent: 90 },
      ],
    },
    {
      id: "9",
      name: "Nagina Bibi",
      rollNo: "BSCS-009",
      totalClasses: 40,
      attendedClasses: 30,
      attendancePercent: 85,
      subjectWise: [
        { subject: "Data Structures", percent: 88 },
        { subject: "Database Systems", percent: 85 },
        { subject: "Computer Science", percent: 90 },
      ],
    },
      {
      id: "10",
      name: "Parwasha",
      rollNo: "BSCS-0010",
      totalClasses: 40,
      attendedClasses: 30,
      attendancePercent: 84,
      subjectWise: [
        { subject: "Data Structures", percent: 80 },
        { subject: "Database Systems", percent: 84 },
        { subject: "Computer Science", percent: 85 },
      ],
    },
  ];

  // ✅ Reusable progress bar
  const ProgressBar = ({ percent, color }: { percent: number; color: string }) => (
    <View style={styles.progressContainer}>
      <View style={[styles.progressFill, { width: `${percent}%`, backgroundColor: color }]} />
    </View>
  );

  // ---------------------------
  // 1️⃣ List view
  // ---------------------------
  if (!selectedStudent) {
    return (
      <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
        <Text style={styles.header}>📋 Student Attendance</Text>
        <FlatList
          data={students}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => setSelectedStudent(item)}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.roll}>{item.rollNo}</Text>
              </View>

              <ProgressBar percent={item.attendancePercent} color="#2196F3" />
              <Text style={styles.percentText}>{item.attendancePercent}% Attendance</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  // ---------------------------
  // 2️⃣ Detail view
  // ---------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedStudent.name}</Text>
      <Text style={styles.meta}>Roll No: {selectedStudent.rollNo}</Text>

      <Text style={styles.sectionTitle}>Overall Attendance</Text>
      <ProgressBar percent={selectedStudent.attendancePercent} color="#4CAF50" />
      <Text style={styles.percentText}>{selectedStudent.attendancePercent}%</Text>

      <Text style={styles.sectionTitle}>Subject-wise Attendance</Text>
      {selectedStudent.subjectWise?.map((subject, index) => (
        <View key={index} style={styles.subjectRow}>
          <Text>{subject.subject}</Text>
          <ProgressBar percent={subject.percent} color="#2196F3" />
          <Text style={styles.percentText}>{subject.percent}%</Text>
        </View>
      ))}

      <View style={{ marginTop: 20 }}>
        <Button title="⬅ Back to List" onPress={() => setSelectedStudent(null)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0D47A1",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#E3F2FD",
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 2,
  },
  name: { fontSize: 18, fontWeight: "600", color: "#0D47A1" },
  roll: { fontSize: 14, color: "#1565C0" },
  percentText: { marginTop: 4, color: "#333", fontWeight: "600" },
  progressContainer: {
    height: 12,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    marginTop: 6,
  },
  progressFill: {
    height: "100%",
    borderRadius: 8,
  },
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "700", color: "#1A237E" },
  meta: { marginTop: 6, color: "#555" },
  sectionTitle: { fontSize: 16, fontWeight: "700", marginTop: 20 },
  subjectRow: { marginTop: 10 },
});
