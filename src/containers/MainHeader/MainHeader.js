import classes from './MainHeader.module.css'
import bg from '../../assets/bg.png'
import {Grid} from "@mui/material";

const MainHeader = props => {
  return (
    <Grid
      container
      direction={{ xs :'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      className={classes.mainHeader}
      style={{backgroundImage: `url(${bg})`}}
    >
      {props.sectionHeader ? <h1>{props.sectionHeader}</h1> : props.children}
    </Grid>
  )
}

export default MainHeader