import { Avatar, Box, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { AddIcCall, PersonPinCircle } from '@material-ui/icons';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    box:{
        backgroundColor:'red',
        padding:`25px`,
        margin:`25px`
    },  
    myheader:{
        color:'white',
        fontSize:'bold'

    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
      },
})
export default function MyBox() {

        
        const emails = ['username@gmail.com', 'user02@gmail.com'];
        const classes = useStyles()    
  return (
    <>
        <Box className={classes.box}>
            <Typography variant="h4" className={classes.myheader}>
                    My Box Heading 
            </Typography>
            <Typography variant="body1">
                    My Box Body
            </Typography>
            <CircularProgress />
            
        </Box>
        <Dialog aria-labelledby="simple-dialog-title">
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonPinCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button>
          <ListItemAvatar>
            <Avatar>
              <AddIcCall />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
        
    </>
  )
}
