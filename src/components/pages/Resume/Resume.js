import MainHeader from "../../../containers/MainHeader/MainHeader";
import MainContent from "../../../containers/MainContent/MainContent";
import {Grid} from "@mui/material";
import TimelineElement from "../../UI/TimelineElement/TimelineElement";
import classes from './Resume.module.css'

const Resume = props => {
  return (
    <>
      <MainHeader sectionHeader={"Resume"}/>
      <MainContent>
        <Grid container direction="row">
          <Grid className={classes.educationTimeline} item xs={6}>
            <h1>Education</h1>
            <TimelineElement
            date={'2021-2022'}
          desc={'Hellooooooooooooo world'}
          link={'https://10web.io'}/>
            <TimelineElement
            date={'2021-2022'}
          desc={'Hello world'}
          link={'https://10web.io'}/>
            <TimelineElement
            date={'2021-2022'}
          desc={'Hello world'}
          link={'https://10web.io'}/>
            <TimelineElement
            date={'2021-2022'}
          desc={'Hello world'}
          link={'https://10web.io'}/>
          </Grid>
          <Grid className={classes.experienceTimeline} item xs={6}>
            <h1>Experience</h1>
            <TimelineElement
            date={'2021-2022'}
          desc={'Hello world'}
          link={'https://10web.io'}/>
            <TimelineElement
            date={'2021-2022'}
          desc={'Hello world'}
          link={'https://10web.io'}/>
            <TimelineElement
            date={'2021-2022'}
          desc={'Hello world'}
          link={'https://10web.io'}/>
          </Grid>
        </Grid>
      </MainContent>
    </>

  )
}

export default Resume