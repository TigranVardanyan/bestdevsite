import MainHeader from "../../../containers/MainHeader/MainHeader";
import MainContent from "../../../containers/MainContent/MainContent";
import {
  Box,
  Button, FormControl,
  Grid,
  TextField
} from "@mui/material";
import classes from './Contact.module.css'
import {FullscreenControl, Map, TypeSelector, YMaps} from "react-yandex-maps";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendIcon from '@mui/icons-material/Send';
import ContactInfo from "../../ContactInfo/ContactInfo";

const Contact = props => {
  return (
    <>
      <MainHeader sectionHeader={"Contact"}/>
      <MainContent>
        <Grid container direction="row">
          <Grid className={classes.contacts} item xs={12} md={6}>
            <Grid container direction="column">
              <Grid item xs={12} md={6}>
                <h2>Get in <span className={classes.cChange}>Touch</span></h2>
                <div className="ymaps" style={{ height: "240px" }}>
                  <YMaps query={{ lang: "en_US" }}>
                    <Map defaultState={{
                      center: [40.181763, 44.526105],
                      zoom: 16,
                      controls: [],
                      type: 'yandex#satellite'
                    }} width="100%">
                      <FullscreenControl/>
                      <TypeSelector options={{ float: 'left' }}
                                    defaultMapTypes={['yandex#map', 'yandex#hybrid', 'yandex#satellite']}/>
                    </Map>
                  </YMaps>
                </div>
              </Grid>
              <Grid item>
                <ContactInfo/>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.contactForm} item xs={12} md={6}>
            <Grid container direction="column">
              <Grid item xs={12}>
                <h2>Contact <span className={classes.cChange}>Form</span></h2>
              </Grid>
              <Box item xs={12} sx={{ display: 'flex', alignItems: 'flex-start', mt: 1 }}>
                <AccountCircleOutlinedIcon sx={{ color: 'var(--theme-color)', width: "28px", height: '28px', mx: 2, my: 2 }}/>
                <FormControl fullWidth>
                  <TextField id="input-with-sx" label="Full name" variant="standard"/>
                </FormControl>
              </Box>
              <Box item xs={12} sx={{ display: 'flex', alignItems: 'flex-start', mt: 1 }}>
                <EmailOutlinedIcon sx={{ color: 'var(--theme-color)', width: "28px", height: '28px', mx: 2, my: 2 }}/>
                <FormControl fullWidth>
                  <TextField id="input-with-sx" label="Email" variant="standard"/>
                </FormControl>
              </Box>
              <Box item xs={12} sx={{ display: 'flex', alignItems: 'flex-start', mt: 1 }}>
                <ChatBubbleOutlineOutlinedIcon
                  sx={{ color: 'var(--theme-color)', width: "28px", height: '28px', mx: 2, my: 2 }}/>
                <FormControl fullWidth>
                  <TextField id="input-with-sx" label="Message" variant="standard" multiline={true} rows={6}/>
                </FormControl>
              </Box>
              <Grid item xs={12}>
                <Grid container justifyContent={'center'}>
                  <Button variant="contained" sx={{ backgroundColor: 'var(--theme-color)', mt: 1 }} endIcon={<SendIcon/>}>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MainContent>
    </>
  )
}
export default Contact