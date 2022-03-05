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
                <h1 className={classes.author}>Tigran <span className={classes.cChange}>Vardanyan</span></h1>
              </Link>
            </div>
          </Grid>
          <Grid item xs={9}>
              <ul className={classes.navigationList}>
                <li><Link to="/bestdevsite/" data-section="home" id="homeBtn">Home</Link></li>
                <li><Link to="/bestdevsite/portfolio" data-section="portfolio" id="portfolioBtn">Portfolio</Link></li>
                <li><Link to="/bestdevsite/resume" data-section="resume" id="resumeBtn">Resume</Link></li>
                <li><Link to="/bestdevsite/services" data-section="services" id="servicesBtn">Services</Link></li>
                <li><Link to="/bestdevsite/blog" data-section="blog" id="blogBtn">Blog</Link></li>
                <li><Link to="/bestdevsite/contact" data-section="contact" id="contactBtn">Contact</Link></li>
                <li><Link to="/bestdevsite/extra" data-section="extra" id="extraBtn">Extra</Link></li>
              </ul>
          </Grid>
        </Grid>
      </Box>
  )
}

export default Navbar