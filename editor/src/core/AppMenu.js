import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SpritesIcon from '@material-ui/icons/EmojiPeople'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'

function AppMenu() {
  return (
    <List>
      <ListItem component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem component={Link} to="/sprites">
        <ListItemIcon>
          <SpritesIcon />
        </ListItemIcon>
        <ListItemText primary="Sprites" />
      </ListItem>
    </List>
  )
}

export default AppMenu
