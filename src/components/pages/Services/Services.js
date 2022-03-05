import MainHeader from "../../../containers/MainHeader/MainHeader";
import MainContent from "../../../containers/MainContent/MainContent";
import Service from "../../UI/Service/Service";
import layout from '../../../assets/layout.svg'
import programming from '../../../assets/programming.svg'
import optimization from '../../../assets/optimization.svg'
import management from '../../../assets/management.svg'
import {Grid} from "@mui/material";

const Services = props => {
  return (
    <>
      <MainHeader sectionHeader={"Services"}/>
      <MainContent>
        <Grid container direction="row">
          <Grid item md={3} xs={12} >
            <Service
              img={layout}
              service={"Layout"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus dolorum rerum?"}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <Service
              img={programming}
              service={"Programming"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus dolorum rerum?"}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <Service
              img={optimization}
              service={"Optimization"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus dolorum rerum?"}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <Service
              img={management}
              service={"Management"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus dolorum rerum?"}
            />
          </Grid>
        </Grid>




      </MainContent>
    </>
  )
}
export default Services