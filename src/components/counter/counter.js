import React, { useEffect, useRef, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Snackbar } from "@material-ui/core";
export function Counter(props) {
  console.log(props);
  const [time, setTime] = useState("");
  const [seconds, setSeconds] = useState(5 * 60 * 1000);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const interval = useRef(null);
  useEffect(() => {
    startCounter();
  }, []);
  useEffect(() => {
    if (seconds === 0) {
      clearInterval(interval.current);
      setOpen(true);
      setMessage("Logging you out ...");
      setTimeout(() => {
        props.history.push("/");
      }, 2000);
    } else if (seconds > 0) setTime(millisToMinutesAndSeconds(seconds));
  }, [seconds, props]);
  const startCounter = () =>
    (interval.current = setInterval(() => {
      setSeconds((prevState) => prevState - 1000);
    }, 1000));
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  return (
    <div>
      <Paper elevation={3} style={{ paddingLeft: 10, paddingRight: 10 }}>
        <h5>This session will end in {time}</h5>
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
export default Counter;
