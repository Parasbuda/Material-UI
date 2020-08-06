import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import {Slide, Grid} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
   background:"#37474f",
  },
  heading: {
    fontSize:"16px",
    color:"#fffffe",
    alignItems:"center",
    lineHeight:"22.4px",
    fontWeight:"400"
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
    color:"#fffffe"
  },
  details: {
    alignItems: 'center',
  },
  headingflex:{
    flexBasis:"50%"
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function MegaMenu() {
  const classes = useStyles();

  return (
    <div >
      <ExpansionPanel  className={classes.root} square="false">
        <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon className={classes.icon} />}  >
        <div className={classes.headingflex} />
           <Typography className={classes.heading}>SHOP</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Grid container spacing={1}>
            <Grid item >
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_180x.png?v=1579871992" alt="1st pic"/>
            </Grid>
            <Grid item>
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_180x.png?v=1579871956" alt="2nd image"/>
            </Grid>
            <Grid item>
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_180x.png?v=1579871975" alt="3rd img"/>
            </Grid>
            <Grid item>
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_180x.png?v=1579871901" alt="4th"/>
            </Grid>
            <Grid item>
              
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_180x.png?v=1579872011" alt="5th"/>
            </Grid>
            <Grid item>
              
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_180x.png?v=1579872074" alt="6th"/>
            </Grid>
            <Grid item>
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_180x.jpg?v=1579872033" alt="7th"/>
            </Grid>
          </Grid>     
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
  );
}