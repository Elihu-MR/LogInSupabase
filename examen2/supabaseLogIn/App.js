import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { supabase } from "./components/supabase";


export default function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert("Error: " + error.message);
      console.log("Error: " + error.message);
    } else {
      alert("Success: Check your email for the confirmation link.");
      console.log("Success: Check your email for the confirmation link.");
    }
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert("Error: " + error.message);
      console.log("Error" + error.message);
    } else {
      alert("Success", "You are now logged in.");
      console.log("Success", "You are now logged in.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Supabase Login App</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Iniciar sesión</Text>

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={styles.input}
          placeholder="ejemplo@correo.com"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry
          style={styles.input}
          placeholder="••••••••"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 35,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
    color: "#444",
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    width: "100%",
    height: 44,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: "#28a745",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
