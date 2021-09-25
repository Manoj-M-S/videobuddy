import React, { useContext } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '400px',
    borderRadius:'5px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    margin: '10px',
    borderRadius :'10px',
    background:' rgba(255, 255, 255, 0.815)'
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
       <Grid container className={classes.gridContainer}>
      {stream && (

        <Paper id="shadow" className={classes.paper}>
          
          <Grid item xs={12} md={6}>
            <h2>{name || 'Name'}</h2>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (

        <Paper id="shadow"className={classes.paper}>
          <Grid item xs={12} md={6}>
            <h2>{call.name || 'Name'}</h2>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
   
  );
};

export default VideoPlayer;
