import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Resume from "../pages/Resume/Resume";
import Services from "../pages/Services/Services";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Extra from "../pages/Extra/Extra";
import {Box, Grid} from "@mui/material";
import classes from './MainSection.module.css'

const MainSection = props => {
  return (
    <Box className={classes.content}>
        <Grid
          justifyContent="center"
          alignItems="center"
          container
          spacing={0}
        >
          <Grid item xs={9}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/extra" element={<Extra/>}/>
            </Routes>
          </Grid>
        </Grid>
    </Box>

  )
}

export default MainSection