import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  export default function AlertModel({handleClickFlag,setHandleClickFlag}){
    const [open, setOpen] = React.useState(false);

     
     
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        setHandleClickFlag(false);
      };

      return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
        </Snackbar>
      )
  }