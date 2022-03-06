import CheckIcon from "@mui/icons-material/Check";

const ColorChangeElement = props => {
  return (
    <div id={props.id} data-color={props.color}
         style={{ backgroundColor: props.color, height: '25px', width: '35px', textAlign:"center", color:"white" }}>
      {props.selected === props.id && <CheckIcon/>}
    </div>
  )
}

export default ColorChangeElement