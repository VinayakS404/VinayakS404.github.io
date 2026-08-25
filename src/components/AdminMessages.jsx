import { useState } from "react";

function AdminMessages() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [authenticated, setAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const credentials = btoa(`${username}:${password}`);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/message`,
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        },
      );

      if (response.status === 401) {
        throw new Error("Invalid username or password");
      }

      if (response.status === 403) {
        throw new Error("You don't have permission to access this page");
      }

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();

      setMessages(data);
      setAuthenticated(true);

      // Store credentials temporarily while this page is open
      sessionStorage.setItem("adminAuth", credentials);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setMessages([]);
    setUsername("");
    setPassword("");
    sessionStorage.removeItem("adminAuth");
  };

  // LOGIN PAGE
  if (!authenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#111",
          color: "white",
        }}
      >
        <form
          onSubmit={login}
          style={{
            width: "350px",
            padding: "30px",
            background: "#1e1e1e",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
          }}
        >
          <h1 style={{ marginBottom: "25px" }}>Admin Login</h1>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              boxSizing: "border-box",
              borderRadius: "6px",
              border: "1px solid #444",
              background: "#2a2a2a",
              color: "white",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              boxSizing: "border-box",
              borderRadius: "6px",
              border: "1px solid #444",
              background: "#2a2a2a",
              color: "white",
            }}
          />

          {error && (
            <p style={{ color: "#ff5555", marginBottom: "15px" }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              background: "#4f46e5",
              color: "white",
              fontSize: "16px",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    );
  }

  // ADMIN PAGE
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "#111",
        color: "white",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Messages</h1>

        <button
          onClick={logout}
          style={{
            padding: "10px 18px",
            background: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            style={{
              border: "1px solid #444",
              padding: "20px",
              marginTop: "15px",
              borderRadius: "8px",
              background: "#1e1e1e",
            }}
          >
            <h3>Name: {message.name}</h3>

            <p>Email: {message.email}</p>

            <p>Message: {message.message}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminMessages;
