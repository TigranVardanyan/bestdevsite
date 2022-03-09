import MainHeader from "../../../containers/MainHeader/MainHeader";
import MainContent from "../../../containers/MainContent/MainContent";
import TimelineElement from "../../UI/TimelineElement/TimelineElement";

const Portfolio = props => {
  return (
    <>
      <MainHeader>
        <h1>Portfolio</h1>
      </MainHeader>
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