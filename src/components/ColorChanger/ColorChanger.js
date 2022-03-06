import classes from './ColorChanger.module.css'
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import CheckIcon from '@mui/icons-material/Check';
import {useState} from "react";


const ColorChanger = props => {
  const [cogClass, setCogClass] = useState('cogRot1')
  const [cColor, setCColor] = useState('#7E6DF6')

  const cogMouseOverHandler = () => {
    setCogClass('cogRot2')
  }

  const cogMouseLeaveHandler = () => {
    setCogClass('cogRot1')
  }
  return (<aside className={classes.colorChanger}>
    <div className={classes.colorChangerToggler} onMouseOver={cogMouseOverHandler} onMouseLeave={cogMouseLeaveHandler}>
      <BrightnessHighIcon sx={{transition: 'unset'}} className={classes[cogClass]}/>
    </div>
    <div className={classes.colorPalette}>
      <span>Main Color</span>
      <div className={classes.colors}>
        <div className={classes.color} data-color={'#7E6DF6'} style={{backgroundColor: "#7E6DF6"}}>
          <CheckIcon/>
        </div>
        <div className={classes.color} data-color={'#F44336'} style={{backgroundColor: "#F44336"}}/>
        <div className={classes.color} data-color={'#2196F3'} style={{backgroundColor: "#2196F3"}}/>
        <div className={classes.color} data-color={'#FF5722'} style={{backgroundColor: "#FF5722"}}/>
        <div className={classes.color} data-color={'#2ECA7F'} style={{backgroundColor: "#2ECA7F"}}/>
        <div className={classes.color} data-color={'#29B6F6'} style={{backgroundColor: "#29B6F6"}}/>
        <div className={classes.color} data-color={'#E91E63'} style={{backgroundColor: "#E91E63"}}/>
        <div className={classes.color} data-color={'#AA00FF'} style={{backgroundColor: "#AA00FF"}}/>
        <div className={classes.color} data-color={'#FF9800'} style={{backgroundColor: "#FF9800"}}/>
        <div className={classes.color} data-color={'#FBC02D'} style={{backgroundColor: "#FBC02D"}}/>
        <div className={classes.color} data-color={'#9DD100'} style={{backgroundColor: "#9DD100"}}/>
        <div className={classes.color} data-color={'#26D9AC'} style={{backgroundColor: "#26D9AC"}}/>
      </div>
    </div>
  </aside>)
}
export default ColorChanger