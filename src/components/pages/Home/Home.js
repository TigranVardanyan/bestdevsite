import MainHeader from "../../../containers/MainHeader/MainHeader";
import MainContent from "../../../containers/MainContent/MainContent";
import SocialIcon from "../../UI/SocialIcon/SocialIcon";
import classes from './Home.module.css'
import avatar from './../../../assets/avatar.png'

import Reveal from "../../UI/Reveal/Reveal";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import {faStackOverflow} from "@fortawesome/free-brands-svg-icons/faStackOverflow";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {Button, Grid, styled, Table, TableBody, TableContainer, TableRow} from "@mui/material";
import TableCellTemp from "@mui/material/TableCell";

import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const TableCell = styled(TableCellTemp)(({}) => ({
  border: 'none',
}));


const Home = props => {
  return (<>
    <MainHeader isHomepage={true}>
      <Grid item xs={12} md={4}>
        <div className="photo">
          <img className={classes.photoAvatar} src={avatar} alt="" width={270} height={270}/>
        </div>
      </Grid>
      <Grid container xs={12} md={8} direction={"column"} alignItems={"center"}>
        <Grid item xs={12}>
          <h2 className={classes.author}>TIGRAN VARDANYAN</h2>
        </Grid>
        <Grid item>
          <h3 className={classes.profession}>
            <div className="reveal">Software Developer</div>
            <Reveal/>
          </h3>
        </Grid>
        <Grid item>
          <div className="social-links_new">
            <SocialIcon className={'cChange_color'} icon={faFacebookF}
                        socialLink={'https://www.facebook.com/profile.php?id=100005146777210'}/>
            <SocialIcon className={'cChange_color'} icon={faInstagram}
                        socialLink={'https://www.instagram.com/tig_vardanyan/'}/>
            <SocialIcon className={'cChange_color'} icon={faStackOverflow}
                        socialLink={'https://ru.stackoverflow.com/users/299327/tigran-vardanyan'}/>
            <SocialIcon className={'cChange_color'} icon={faGithub}
                        socialLink={'https://github.com/TigranVardanyan'}/>
          </div>
        </Grid>
      </Grid>
    </MainHeader>
    <MainContent>
      <Grid container direction={"row"}>
        <Grid item xs={12} md={5}>
          <Grid container direction={"column"}>
            <Grid>
              <h2>About <span className={classes.cChange}>Me</span></h2>
            </Grid>
            <Grid>
              <p>Lorem ipsum dolor sit amet, consnumquam quae quod vel. Accusamus amet dolores facilis iusto minus
                obcaecati odio quae qui quo. Cum dolore laboriosam laudantium nulla perferendis, voluptatum.</p>
            </Grid>
            <Button className="download_button" variant="outlined">
              DOWNLOAD RESUME
            </Button>
          </Grid>
        </Grid>
        <Grid container xs={12} md={7} justifyContent={"center"} alignItems={"end"}>
          <TableContainer>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      Age
                    </TableCell>
                    <TableCell className={classes.tableCellRight}>
                      22
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Citizenship
                    </TableCell>
                    <TableCell className={classes.tableCellRight}>
                      Armenian
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Address
                    </TableCell>
                    <TableCell className={classes.tableCellRight}>
                      Armenia, Yerevan
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      E-mail
                    </TableCell>
                    <TableCell className={classes.cChange + ' ' + classes.tableCellRight}>
                      tig.vardanyan.001@gmail.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Phone
                    </TableCell>
                    <TableCell className={classes.tableCellRight}>
                      +374 77 720 166
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Freelance
                    </TableCell>
                    <TableCell className={classes.tableCellRight}>
                      Available
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
        </Grid>
      </Grid>
    </MainContent>
  </>)
}
export default Home