import {
    Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Alert } from "@mui/material";
import React from "react";

const styles = makeStyles({
  form: {
    margin: `25px`,
    padding: `25px`,
  },
  input: {},
  box: {
    backgroundColor: "lightblue",
  },
  submitButton: {
    margin: `10px`,
    padding: `1px`,
  },
});

export default function UserForm() {
  const classes = styles();
  return (
    <>
   <Alert severity="info">
    Banking Systems will be unavailable on this Saturday, 13th May. Incovience is regretted!
   </Alert>
    <form className={classes.form}>
      <FormControl>
        <TextField
          className={classes.input}
          id="name-input"
          label="name"
          type="text"
        />
      </FormControl>{" "}
      <br />
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>{" "}
      <br />
      <FormControl>
        <FormControlLabel
          control={<Checkbox name="checkedA" />}
          label="AWS Certified"
        />
      </FormControl> <br />
      <FormControl>
             <Button className={classes.submitButton} variant="contained" color="primary">
                Submit
            </Button>
        </FormControl>
      </form>
    </>
  );
}
