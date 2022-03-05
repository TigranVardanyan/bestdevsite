import {Link} from "react-router-dom";
import classes from './Navbar.module.css'
import {Box, Container, Grid} from "@mui/material";

const Navbar = props => {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid justifyContent="center"
              alignItems="center" container spacing={0} className={classes.container}>
          <Grid item xs={3}>
            <div className="title mobile_hidden">
              <Link to="/">
                <h1>Tigran <span className="cChange">Vardanyan</span></h1>
              </Link>
            </div>
          </Grid>
          <Grid item xs={9}>
              <ul className={classes.navigationList}>
                <li><Link to="/" data-section="home" id="homeBtn">Home</Link></li>
                <li><Link to="/portfolio" data-section="portfolio" id="portfolioBtn">Portfolio</Link></li>
                <li><Link to="/resume" data-section="resume" id="resumeBtn">Resume</Link></li>
                <li><Link to="/services" data-section="services" id="servicesBtn">Services</Link></li>
                <li><Link to="/blog" data-section="blog" id="blogBtn">Blog</Link></li>
                <li><Link to="/contact" data-section="contact" id="contactBtn">Contact</Link></li>
                <li><Link to="/extra" data-section="extra" id="extraBtn">Extra</Link></li>
              </ul>
          </Grid>
        </Grid>
      </Box>
  )
}

export default Navbar