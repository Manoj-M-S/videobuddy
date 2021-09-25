import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles(() => ({
  
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className="jumbotron  text-center">
      <h1 className="display-4">Welcome To VideoBuddy <span role="img" aria-label="emoji">💬</span></h1>
      </div>
      
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar> 
    </div>
  );
};

export default App;
