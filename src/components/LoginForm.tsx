import { useState } from "react";
import { Button, TextField, CircularProgress, Alert } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/store";
import { useLoginMutation } from "../features/auth/authApi";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error, data }] = useLoginMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <>
      {data && <p>Welcome, {data.user.name}!</p>}
      {error && <Alert severity="error">Login failed</Alert>}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <Alert severity="error">{error}</Alert>}

        <Button type="submit" variant="contained" disabled={isLoading}>
          {isLoading ? <CircularProgress size={24} /> : "Login"}
        </Button>
      </form>{" "}
    </>
  );
}

export default LoginForm;
