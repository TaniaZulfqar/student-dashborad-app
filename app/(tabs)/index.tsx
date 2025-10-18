import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import AttendanceScreen from "./screens/AttendanceScreen";
import CoursesScreen from "./screens/CoursesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import StudentsScreen from "./screens/StudentsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            let iconName = "home";
            if (route.name === "Students") iconName = "people";
            else if (route.name === "Courses") iconName = "book";
            else if (route.name === "Attendance") iconName = "bar-chart";
            else if (route.name === "Profile") iconName = "person";
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#1976D2",
          tabBarInactiveTintColor: "#90A4AE",
          tabBarStyle: {
            backgroundColor: "#E3F2FD",
            borderTopWidth: 0.5,
            height: 60,
          },
          headerStyle: { backgroundColor: "#1976D2" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        })}
      >
        <Tab.Screen name="Students" component={StudentsScreen} />
        <Tab.Screen name="Courses" component={CoursesScreen} />
        <Tab.Screen name="Attendance" component={AttendanceScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    
  );
}
