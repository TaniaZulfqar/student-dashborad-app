import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Tania Zulfiqar",
    rollNo: "BSCS-004",
    department: "Computer Science",
    semester: "7th",
    gpa: "3.85%",
    email: "tania.zulfiqar@example.com",
    phone: "+92 300 1234567",
    skills: "React Native, JavaScript, UI Design",
    achievements: ["Learned C++", "Learned Reactive Learning", "Learned OOPS"],
  });

  const handleChange = (field: string, value: string) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleAchievementChange = (index: number, value: string) => {
    const updated = [...profile.achievements];
    updated[index] = value;
    setProfile({ ...profile, achievements: updated });
  };

  const addAchievement = () => {
    setProfile({
      ...profile,
      achievements: [...profile.achievements, ""],
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <LinearGradient colors={["#E3F2FD", "#FFFFFF"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>👩‍🎓 Student Profile</Text>

        {/* Profile Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Full Profile</Text>

          {/* Name */}
          <View style={styles.field}>
            <Text style={styles.label}>Name:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profile.name}
                onChangeText={(text) => handleChange("name", text)}
              />
            ) : (
              <Text style={styles.value}>{profile.name}</Text>
            )}
          </View>

          {/* Roll No */}
          <View style={styles.field}>
            <Text style={styles.label}>Roll No:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profile.rollNo}
                onChangeText={(text) => handleChange("rollNo", text)}
              />
            ) : (
              <Text style={styles.value}>{profile.rollNo}</Text>
            )}
          </View>

          {/* Department */}
          <View style={styles.field}>
            <Text style={styles.label}>Department:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profile.department}
                onChangeText={(text) => handleChange("department", text)}
              />
            ) : (
              <Text style={styles.value}>{profile.department}</Text>
            )}
          </View>

          {/* Semester */}
          <View style={styles.field}>
            <Text style={styles.label}>Semester:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profile.semester}
                onChangeText={(text) => handleChange("semester", text)}
              />
            ) : (
              <Text style={styles.value}>{profile.semester}</Text>
            )}
          </View>

          {/* GPA */}
          <View style={styles.field}>
            <Text style={styles.label}>GPA:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profile.gpa}
                keyboardType="decimal-pad"
                onChangeText={(text) => handleChange("gpa", text)}
              />
            ) : (
              <Text style={styles.value}>{profile.gpa}</Text>
            )}
          </View>

          {/* Email */}
          <View style={styles.field}>
            <Text style={styles.label}>Email:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profile.email}
                onChangeText={(text) => handleChange("email", text)}
              />
            ) : (
              <Text style={styles.value}>{profile.email}</Text>
            )}
          </View>

          {/* Phone */}
          <View style={styles.field}>
            <Text style={styles.label}>Phone:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profile.phone}
                onChangeText={(text) => handleChange("phone", text)}
              />
            ) : (
              <Text style={styles.value}>{profile.phone}</Text>
            )}
          </View>

          {/* Skills */}
          <View style={styles.field}>
            <Text style={styles.label}>Skills:</Text>
            {isEditing ? (
              <TextInput
                style={[styles.input, { height: 60 }]}
                multiline
                value={profile.skills}
                onChangeText={(text) => handleChange("skills", text)}
              />
            ) : (
              <Text style={styles.value}>{profile.skills}</Text>
            )}
          </View>
        </View>

        {/* Achievements Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏆 Achievements</Text>
          {profile.achievements.map((item, index) => (
            <View key={index} style={styles.field}>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={item}
                  onChangeText={(text) => handleAchievementChange(index, text)}
                />
              ) : (
                <Text style={styles.value}>• {item}</Text>
              )}
            </View>
          ))}

          {isEditing && (
            <TouchableOpacity style={styles.addButton} onPress={addAchievement}>
              <Icon name="add-circle-outline" size={22} color="#0D47A1" />
              <Text style={styles.addText}>Add Achievement</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Edit/Save Button */}
        <TouchableOpacity
          style={[styles.editButton, isEditing && { backgroundColor: "#2E7D32" }]}
          onPress={isEditing ? handleSave : () => setIsEditing(true)}
        >
          <Icon
            name={isEditing ? "check-circle" : "edit"}
            size={20}
            color="#fff"
          />
          <Text style={styles.editText}>
            {isEditing ? "Save Profile" : "Edit Profile"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D47A1",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#E3F2FD",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  field: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "600",
    color: "#0D47A1",
    marginBottom: 4,
  },
  value: {
    color: "#333",
    fontSize: 15,
  },
  input: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#90CAF9",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0D47A1",
    marginBottom: 8,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  addText: {
    color: "#0D47A1",
    marginLeft: 5,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1976D2",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  editText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "bold",
  },
});
