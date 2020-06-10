import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        setOpen(false);
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} >
        <Alert onClose={handleClose} style={{"background":"#523178"}}>
        <a href="https://www.anu.edu.au/giving/support-us/advancing-our-nation/the-cyber-institute-general-fund" style={{"color":"white"}}> Want to support the Cyber Institute? You can by giving us a gift!
        </a>
        </Alert>
        
      </Snackbar>
    </div>
  );
}