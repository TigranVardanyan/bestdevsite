import classes from './ColorChanger.module.css'
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import {useEffect, useState} from "react";
import ColorChangeElement from "./ColorChangeElement";

const ColorChanger = props => {
  const [showColorPalette, setShowColorPalette] = useState(true)
  const [selectedColor, setSelectedColor ] = useState('paletteColor1')

  useEffect(() => {
    localStorage.getItem('theme-palette') && setSelectedColor(localStorage.getItem('theme-palette'))
    document.documentElement.style.setProperty('--theme-color', localStorage.getItem('theme-color'));
  }, [])

  const cogClickHandler = () => {
    setShowColorPalette(!showColorPalette);
  }
  const colorClickHandler = (e) => {
    if ( e.target.dataset.color ) {
      setSelectedColor(e.target.id)
      document.documentElement.style.setProperty('--theme-color', e.target.dataset.color);
      localStorage.setItem('theme-palette', e.target.id)
      localStorage.setItem('theme-color', e.target.dataset.color)
    }
  }
  return (<aside className={classes.colorChanger}>
    <div className={classes.colorChangerToggler}>
      <BrightnessHighIcon sx={{ transition: 'unset' }} className={classes.cogRot1} onClick={cogClickHandler}/>
    </div>
    <div className={`${classes.colorPalette} ${showColorPalette ? classes.show : ''}` }>
      <span>Main Color</span>
      <div className={classes.colors} onClick={colorClickHandler}>
        <ColorChangeElement id={'paletteColor1'} color={'#7E6DF6'} selected={selectedColor}/>
        <ColorChangeElement id={'paletteColor2'} color={'#F44336'} selected={selectedColor}/>
        <ColorChangeElement id={'paletteColor3'} color={'#2196F3'} selected={selectedColor}/>
        <ColorChangeElement id={'paletteColor4'} color={'#FF5722'} selected={selectedColor}/>
        <ColorChangeElement id={'paletteColor5'} color={'#2ECA7F'} selected={selectedColor}/>
        <ColorChangeElement id={'paletteColor6'} color={'#29B6F6'} selected={selectedColor}/>
        <ColorChangeElement id={'paletteColor7'} color={'#E91E63'} selected={selectedColor}/>
        <ColorChangeElement id={'paletteColor8'} color={'#AA00FF'} selected={selectedColor}/>
        <ColorChangeElement id={'paletteColor9'} color={'#FF9800'} selected={selectedColor}/>
        <ColorChangeElement id={'paletteColor10'} color={'#FBC02D'} selected={selectedColor}/>
        <ColorChangeElement id={'paletteColor11'} color={'#9DD100'} selected={selectedColor}/>
        <ColorChangeElement id={'paletteColor12'} color={'#26D9AC'} selected={selectedColor}/>
      </div>
    </div>
  </aside>)
}
export default ColorChanger