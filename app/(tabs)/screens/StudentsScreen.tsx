import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const StudentsScreen = () => {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const students = [
    {
      id: "1",
      name: "Tania Zulfiqer",
      course: "Computer Science",
      grade: "A",
      attendance: "95%",
      semester: "7th",
      gpa: "3.92",
    },
    {
      id: "2",
      name: "Saba Noreen",
      course: "Database Systems",
      grade: "A",
      attendance: "98%",
      semester: "7th",
      gpa: "3.85",
    },
    {
      id: "3",
      name: "Amna Ashraf",
      course: "Operating Systems",
      grade: "A+",
      attendance: "98%",
      semester: "7th",
      gpa: "3.90",
    },
    {
      id: "4",
      name: "Aneesha Shareef",
      course: "Artificial Intelligence",
      grade: "A-",
      attendance: "70%",
      semester: "7th",
      gpa: "3.80",
    },
    {
      id: "5",
      name: "Fiza Arshad",
      course: "Digital Logic Design",
      grade: "A",
      attendance: "98%",
      semester: "7th",
      gpa: "3.88",
    },
    {
      id: "6",
      name: "Fatima Alvi",
      course: "Discrete Structures",
      grade: "A-",
      attendance: "92%",
      semester: "7th",
      gpa: "3.78",
    },
    {
      id: "7",
      name: "Sonia Alvi",
      course: "Wrieless Communication",
      grade: "A-",
      attendance: "90%",
      semester: "7th",
      gpa: "3.75",
    },
    {
      id: "8",
      name: "Zoha Imraan",
      course: "Computer Networks",
      grade: "B+",
      attendance: "85%",
      semester: "7th",
      gpa: "3.65",
    },
    {
      id: "9",
      name: "Nagina Bibi",
      course: "Object Oriented Programming",
      grade: "B",
      attendance: "88%",
      semester: "7th",
      gpa: "3.70",
    },
    {
      id: "10",
      name: "Parwasha",
      course: "Professional Practics",
      grade: "B",
      attendance: "90%",
      semester: "7th",
      gpa: "3.70",
    },
  ];

  // 🎓 Student Detail View
  if (selectedStudent) {
    return (
      <LinearGradient colors={["#E3F2FD", "#FFFFFF"]} style={styles.container}>
        <ScrollView contentContainerStyle={styles.detailContainer}>
          <View style={styles.detailCard}>
            <Icon name="person" size={80} color="#1565C0" style={styles.icon} />
            <Text style={styles.title}>{selectedStudent.name}</Text>
            <View style={styles.divider} />
            <Text style={styles.detailText}>
              🎓 <Text style={styles.label}>Course:</Text> {selectedStudent.course}
            </Text>
            <Text style={styles.detailText}>
              🏆 <Text style={styles.label}>Grade:</Text> {selectedStudent.grade}
            </Text>
            <Text style={styles.detailText}>
              📅 <Text style={styles.label}>Attendance:</Text>{" "}
              {selectedStudent.attendance}
            </Text>
            <Text style={styles.detailText}>
              🗓️ <Text style={styles.label}>Semester:</Text>{" "}
              {selectedStudent.semester}
            </Text>
            <Text style={styles.detailText}>
              🎯 <Text style={styles.label}>GPA:</Text> {selectedStudent.gpa}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedStudent(null)}
          >
            <Icon name="arrow-back" size={20} color="#fff" />
            <Text style={styles.backText}>Back to List</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    );
  }

  // 📋 Student List View
  return (
    <LinearGradient colors={["#E3F2FD", "#FFFFFF"]} style={styles.container}>
      <Text style={styles.header}>👩‍🎓 Students List</Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => setSelectedStudent(item)}
          >
            <View style={styles.cardHeader}>
              <Icon name="person" size={30} color="#1565C0" />
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text style={styles.info}>{item.course}</Text>
            <View style={styles.row}>
              <Text style={styles.badge}>Grade: {item.grade}</Text>
              <Text style={styles.badge}>Attendance: {item.attendance}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
};

export default StudentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
    textAlign: "center",
    color: "#0D47A1",
  },
  card: {
    backgroundColor: "#fff",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#212121",
    marginLeft: 8,
  },
  info: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  badge: {
    backgroundColor: "#E3F2FD",
    color: "#1565C0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 13,
    fontWeight: "500",
  },
  detailContainer: {
    alignItems: "center",
    padding: 20,
  },
  detailCard: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    width: "90%",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0D47A1",
    marginVertical: 10,
  },
  divider: {
    height: 2,
    width: "60%",
    backgroundColor: "#E3F2FD",
    marginVertical: 10,
  },
  label: {
    color: "#0D47A1",
    fontWeight: "600",
  },
  detailText: {
    fontSize: 16,
    color: "#424242",
    marginVertical: 6,
  },
  icon: {
    marginBottom: 8,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1565C0",
    padding: 14,
    marginTop: 30,
    borderRadius: 12,
    width: "80%",
    alignSelf: "center",
  },
  backText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 6,
    fontWeight: "500",
  },
});
