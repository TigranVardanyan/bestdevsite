import classes from "./MainContent.module.css";
import {Grid} from "@mui/material";

const MainContent = props => {
  return (
    <Grid container className={classes.mainContent}>
      {props.children}
    </Grid>
  )
}

export default MainContent