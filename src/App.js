import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core"
import AppBarTwo from './Component/AppBarTwo';
import MegaMenu from "./Component/MegaMenu"
import {Typography} from "@material-ui/core"
import Carousel from './Component/Carousel';
function App() {
  return (
    <Grid container direction="column">
      <Grid item xs={12} >
      <AppBarTwo/>
      </Grid >
      <Grid item xs={12}>
      <MegaMenu/>
      </Grid>
      <Grid item xs={12}>
      <Typography variant="h5">Non irure aliqua nostrud nulla quis consectetur ut mollit. Ipsum pariatur nostrud ut amet consequat commodo excepteur aliquip nulla tempor occaecat veniam. Officia qui ea nostrud minim aliqua dolor in deserunt veniam est consequat nostrud fugiat consequat. Irure magna eu culpa consectetur ullamco eu consequat duis nulla. Voluptate veniam pariatur do elit aliquip anim enim veniam sit ut ex tempor nostrud. Mollit magna consectetur est aute occaecat sit anim id labore reprehenderit minim nulla non.

      Fugiat veniam aliqua adipisicing sunt proident consectetur. Qui sint culpa aliqua commodo. Velit esse amet aliquip amet duis nulla commodo enim quis nulla. Duis cupidatat cillum mollit fugiat culpa dolor ullamco non esse mollit incididunt non cillum enim.</Typography>
    
      </Grid>
    </Grid>
  );
}

export default App;
