import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Snackbar } from "@material-ui/core";
export function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  let submit = () => {
    if (email === "abc@xyz.com" && password === "abcxyz") {
      setTimeout(() => {
        props.history.push("in");
      }, 2000);
      setOpen(true);
      setMessage("Logging you in ...");
    } else {
      setOpen(true);
      setMessage("Invalid username or password");
    }
  };
  return (
    <div style={{ margin: "auto", padding: "10px" }}>
      <Paper elevation={3} style={{ padding: 40, margin: 20 }}>
        <h3>Login</h3>
        <TextField
          id="email"
          label="Email"
          required
          placeholder="Email address"
          helperText="Enter your email address here."
          fullWidth
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="password"
          label="Password"
          required
          placeholder="Password"
          helperText="Enter your Password here."
          type="password"
          fullWidth
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ margin: 10, position: "relative" }}
          onClick={submit}
        >
          Submit
        </Button>
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        onClose={(e) => {
          setTimeout(() => {
            setOpen(false);
          }, 2000);
        }}
        message={message}
      ></Snackbar>
    </div>
  );
}
export default Login;
