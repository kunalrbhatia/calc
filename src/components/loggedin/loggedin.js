import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControl, FormControlLabel, FormLabel } from "@material-ui/core";
export function LoggedIn(props) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(0);
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
      <Button
        variant="contained"
        color="primary"
        style={{ right: 30, float: "right", top: 30 }}
        onClick={(e) => {
          props.history.push("/");
        }}
      >
        Logout
      </Button>
      <Paper elevation={3} style={{ padding: 40, display: "block", margin: 20 }}>
        <h3>Calculator</h3>
        <TextField
          style={{ marginTop: 10 }}
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
        <FormControl component="fieldset" style={{ marginTop: 20 }}>
          <FormLabel component="legend">Operation</FormLabel>
          <RadioGroup
            row
            aria-label="position"
            name="position"
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
          style={{ marginTop: 10 }}
          id="num2"
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
          style={{ marginTop: 10 }}
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            calculate(operation);
          }}
        >
          Calculate
        </Button>
        <TextField
          style={{ marginTop: 20 }}
          label="Result"
          variant="outlined"
          value={result}
          id="result"
          fullWidth
          disabled
        />
      </Paper>
    </div>
  );
}
export default LoggedIn;
