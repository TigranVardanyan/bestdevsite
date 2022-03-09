import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import {fab} from '@fortawesome/free-brands-svg-icons'
import avatar from './../../../assets/avatar.png'
import MainHeader from "../../../containers/MainHeader/MainHeader";
import MainContent from "../../../containers/MainContent/MainContent";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import {faStackOverflow} from "@fortawesome/free-brands-svg-icons/faStackOverflow";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {Grid} from "@mui/material";
import SocialIcon from "../../UI/SocialIcon/SocialIcon";
import classes from './Home.module.css'
import Reveal from "../../UI/Reveal/Reveal";

const Home = props => {
  return (<>
    <MainHeader>
      <Grid item xs={12} md={4}>
        <div className="photo">
          <img id="photo-avatar" src={avatar} alt="" width={200} height={200}/>
        </div>
      </Grid>
      <Grid continer xs={12} md={8}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
      >
        <h2 className={classes.author}>TIGRAN VARDANYAN</h2>
        <h3 className={classes.profession}>
          <div className="reveal">Software Developer</div>
          <Reveal/>
        </h3>
        <div className="social-links_new">
          <SocialIcon className={'cChange_color'} icon={faFacebookF}
                      socialLink={'https://www.facebook.com/profile.php?id=100005146777210'}/>
          <SocialIcon className={'cChange_color'} icon={faInstagram}
                      socialLink={'https://www.instagram.com/tig_vardanyan/'}/>
          <SocialIcon className={'cChange_color'} icon={faStackOverflow}
                      socialLink={'https://ru.stackoverflow.com/users/299327/tigran-vardanyan'}/>
          <SocialIcon className={'cChange_color'} icon={faGithub} socialLink={'https://github.com/TigranVardanyan'}/>
        </div>
      </Grid>
    </MainHeader>
    <MainContent>
      <Grid item xs={12} md={5}>
        <div>
          <h2>About <span className={classes.cChange}>Me</span></h2>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consnumquam quae quod vel. Accusamus amet dolores facilis iusto minus
            obcaecati odio quae qui quo. Cum dolore laboriosam laudantium nulla perferendis, voluptatum.</p>
        </div>
        <button className="download_button">
          DOWNLOAD RESUME
        </button>
      </Grid>
      <Grid item xs={12} md={7}>
        <div className="row">
          <table>
            <tbody>
            <tr>
              <td className="table_q">Age</td>
              <td className="table_a">23</td>
            </tr>
            <tr>
              <td className="table_q">Freelance</td>
              <td className="table_a">Available</td>
            </tr>
            <tr>
              <td className="table_q">Residence</td>
              <td className="table_a">Armenian</td>
            </tr>
            <tr>
              <td className="table_q">Address</td>
              <td className="table_a">Armenia, Yerevan</td>
            </tr>
            <tr>
              <td className="table_q">E-mail</td>
              <td className="table_a cChange">tig.vardanyan.001@gmail.com</td>
            </tr>
            <tr>
              <td className="table_q">Phone</td>
              <td className="table_a">+374 77 720 166</td>
            </tr>
            </tbody>
          </table>
        </div>
      </Grid>
    </MainContent>
  </>)
}
export default Home