import MainHeader from "../../../containers/MainHeader/MainHeader";
import MainContent from "../../../containers/MainContent/MainContent";
import TimelineElement from "../../UI/TimelineElement/TimelineElement";

const Portfolio = props => {
  return (
    <>
      <MainHeader sectionHeader={"Portfolio"}/>
      <MainContent>
        <TimelineElement
          name={'10Web'}
          date={'2021-2022'}
          desc={'Hello world'}
          link={'https://10web.io'}
        />
        <TimelineElement
          name={'Armos'}
          date={'2021-2022'}
          desc={'Hello world'}
          link={'https://10web.io'}
        />
        <TimelineElement
          name={'Xaviar'}
          date={'2021-2022'}
          desc={'Hello world'}
          link={'https://10web.io'}
        />
        <TimelineElement
          name={'Armos'}
          date={'2021-2022'}
          desc={'Hello world'}
          link={'https://10web.io'}
        />
        <TimelineElement
          name={'Armos'}
          date={'2021-2022'}
          desc={'Hello world'}
          link={'https://10web.io'}
        />
      </MainContent>
    </>
  )
}
export default Portfolio