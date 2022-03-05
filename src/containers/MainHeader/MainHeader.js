import classes from './MainHeader.module.css'
import bg from '../../assets/bg.png'

const MainHeader = props => {
  return (
    <div className={classes.mainHeader}
    style={{backgroundImage: `url(${bg})`}}>
      <h1>{props.sectionHeader}</h1>
    </div>
  )
}

export default MainHeader