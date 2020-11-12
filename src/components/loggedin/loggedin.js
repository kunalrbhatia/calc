import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Counter } from "../counter/counter";
import { FormControl, FormControlLabel, FormLabel, Snackbar } from "@material-ui/core";
import "./style.css";
export function LoggedIn(props) {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(5);
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(0);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  let calculate = (action) => {
    switch (action) {
      case "add":
      default:
        setResult(num1 + num2);
        break;
      case "subs":
        setResult(num1 - num2);
        break;
      case "mul":
        setResult(num1 * num2);
        break;
      case "div":
        setResult(num1 / num2);
        break;
    }
  };
  return (
    <div style={{ margin: "auto", padding: "10px" }}>
      <div style={{ margin: "auto", paddingTop: 10, paddingLeft: 30, float: "left", top: 30 }}>
        <Counter history={props.history} />
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ right: 30, float: "right", top: 30 }}
        onClick={(e) => {
          setOpen(true);
          setMessage("Logging you out ...");
          setTimeout(() => {
            props.history.push("/");
          }, 2000);
        }}
      >
        Logout
      </Button>
      <Paper elevation={3} style={{ padding: 40, display: "block", margin: 20 }}>
        <h3>Calculator</h3>
        <TextField
          value={num1}
          className="element"
          id="num1"
          label="Number"
          required
          placeholder="Number"
          helperText="Enter a number"
          fullWidth
          type="number"
          onChange={(e) => {
            setNum1(parseFloat(e.target.value));
          }}
        />
        <FormControl component="fieldset" className="element">
          <FormLabel component="legend">Operation</FormLabel>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            value={operation}
            onChange={(e) => {
              setOperation(e.target.value);
            }}
          >
            <FormControlLabel value="add" control={<Radio color="primary" />} label="Add" />
            <FormControlLabel value="subs" control={<Radio color="primary" />} label="Substract" />
            <FormControlLabel value="mul" control={<Radio color="primary" />} label="Multiple" />
            <FormControlLabel value="div" control={<Radio color="primary" />} label="Divide" />
          </RadioGroup>
        </FormControl>
        <TextField
          className="element"
          id="num2"
          value={num2}
          label="Number"
          required
          placeholder="Number"
          helperText="Enter another number"
          fullWidth
          type="number"
          onChange={(e) => {
            setNum2(parseFloat(e.target.value));
          }}
        />

        <Button
          className="element"
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            calculate(operation);
          }}
        >
          Calculate
        </Button>
        <TextField className="result" label="Result" variant="outlined" value={result} id="result" fullWidth disabled />
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
export default LoggedIn;
