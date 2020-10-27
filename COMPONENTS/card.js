import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import Countup from 'react-countup'
import styles from './card.css'
import cx from 'classnames'
const Cards=({confirmed,recovered,deaths,lastUpdate})=>{
if(!confirmed){
	return 'loading...'
}
return(
<React.Fragment>
<div>
 <Grid container spacing={3} justify="center">
  <Grid item component={Card} className="infected">
   <CardContent>
    <Typography color="text-Secondary" gutterBottom>Infected</Typography>
    <Typography variant="h5"> <Countup start={0} end={confirmed.value} duration={2.5} separator=','/></Typography>
    <Typography color="text-Secondary">{new Date(lastUpdate).toDateString()}</Typography>
     <Typography variant="body2">Number of active cases from COVID-19</Typography>
     </CardContent>
  </Grid>
  <Grid item component={Card} className="recovered">
   <CardContent>
    <Typography color="text-Secondary" gutterBottom>Recovered</Typography>
    <Typography variant="h5">   <Countup start={0} end={recovered.value} duration={2.5} separator=','/>
</Typography>
    <Typography color="text-Secondary">{new Date(lastUpdate).toDateString()}</Typography>
     <Typography variant="body2">Number of recoveries from COVID-19</Typography>
     </CardContent>
  </Grid>
  <Grid item component={Card} className="deaths">
   <CardContent>
    <Typography color="text-Secondary" gutterBottom>Deaths</Typography>
    <Typography variant="h5"> <Countup start={0} end={deaths.value} duration={2.5} separator=','/></Typography>
    <Typography color="text-Secondary">{new Date(lastUpdate).toDateString()}</Typography>
     <Typography variant="body2">Number of deaths from COVID-19</Typography>
     </CardContent>
  </Grid>
 </Grid>
</div>
</React.Fragment>

)
}
export default Cards;