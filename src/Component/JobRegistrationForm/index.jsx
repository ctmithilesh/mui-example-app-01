import React from 'react'
import { Box, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, Typography, makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
const styles = makeStyles({
    form:{
        margin:`25px`,
        padding:`25px`
    },
    input:{
    },
    box:{
        backgroundColor:'lightblue'
    },
    submitButton:{
        margin:`10px`,
        padding:`1px`
    }
})
export default function JobRegistrationForm() {
    const classes = styles()
   
  return (
    <>  
    <Typography variant="h3">
        Job Registration Form
    </Typography>
    <Box className={classes.box}>
    <form className={classes.form}>
        <FormControl>
            <TextField
                className={classes.input}
                id="name-input"
                label="name"
                type="text"
        />
        </FormControl> <br /> <br />
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Qualifications</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={classes.input}
        >
          <MenuItem value={`BCOM`}>BCOM</MenuItem>
          <MenuItem value={`MCOM`}>MCOM</MenuItem>
          <MenuItem value={`BSCIT`}>BSCIT</MenuItem>
        </Select>
      </FormControl> <br /> <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={classes.input}
        >
          <MenuItem value={`Male`}>Male</MenuItem>
          <MenuItem value={`Female`}>Female</MenuItem>
        </Select>
      </FormControl>  <br />
      <FormControl>
            <TextField
                className={classes.input}
                id="name-input"
                label="age"
                type="number"
        />
        </FormControl> <br />
        <FormControl>
             <Button className={classes.submitButton} variant="contained" color="primary">
                Submit
            </Button>
        </FormControl>
      </form>
      </Box>
        
    </>
  )
}
