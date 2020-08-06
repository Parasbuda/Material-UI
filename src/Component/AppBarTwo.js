import React from "react"
import { AppBar,Toolbar, IconButton, Typography,Badge } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {makeStyles} from "@material-ui/core"
import logo from"../logo.png"

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles=makeStyles(theme=>({
    root:{
        background :"#37474f",
       
    },
    logo: {
        maxWidth: 60,
        marginRight:"5rem",
       
      },
    left:{
        flexGrow:1
    },
    icon:{
        color:"#fffffe",
        [theme.breakpoints.down('xs')]: {
            display: 'none',
    }
},
    list:{
        display:"flex",
        flexDirection:"row",
        paddingRight:"20.5rem", 
        [theme.breakpoints.down('md')]: {
            display: 'block',
            display:"flex",
            flexDirection:"row",
            paddingRight:"10rem",
            
          },
    },

    search: {
        position: 'relative',
        borderRadius: "5px",
        background: "transparent",
        border:"1px solid #ffffff",
        width:"200px",
        [theme.breakpoints.down('sm')]: {
           border:"none"
        }
       
      },

      searchIcon: {
        height: '100%',
        paddingLeft:"2px",
        position: 'absolute',
        cursor:"pointer",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }

       
      },

      inputRoot: {
        color:"#ffffff"
      },

      inputInput:{
          paddingLeft:"30px",
          justifyContent:"center",
          [theme.breakpoints.down('sm')]: {
              display:"none"
           
          }
        }

     
        
    
    }))

const AppBarTwo=()=>{
    const classes=useStyles()
    return(
        <AppBar position="relative" className={classes.root}>
            <Toolbar>
                <IconButton className={classes.icon}>
                <MenuIcon />
                </IconButton>
                <IconButton>
               
               <img  src={logo} alt="logo" className={classes.logo}/>
              
               </IconButton>

                <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

               

      <div className={classes.left}/>
      <List component="ul" className={classes.list} >
                <ListItem button >
                 <ListItemText primary="Home" />
                </ListItem>
                <ListItem button >
                 <ListItemText primary="About" />
                </ListItem>
                 <ListItem button >      
          <ListItemText primary="Contact" />
        </ListItem>
      </List>

      

                 
                <IconButton className={classes.icon}>          
                <Badge badgeContent={10} color="secondary">
                <Typography variant="button">My-Cart</Typography>
                <ShoppingCartIcon/>
                </Badge>
                </IconButton>
                
                <IconButton className={classes.icon}>
                <Typography variant="button">User</Typography>
                <AccountCircleIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>

    )
}
export default AppBarTwo