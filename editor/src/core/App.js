import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AppMenu from './AppMenu'
import Routes from './Routes'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    paddingTop: 65
  },
  appBarShift: {
    marginLeft: drawerWidth + 'px',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  drawerPaper: {
    width: drawerWidth + 'px',
    position: 'relative',
    whiteSpace: 'nowrap',
    '& > div': {
      width: drawerWidth + 'px'
    }
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBarShift}>
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Pork Realm Editor
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" className={classes.drawerPaper}>
        <AppMenu />
      </Drawer>
      <main className={classes.content}>
        <Routes />
      </main>
    </div>
  );
}

export default App;
