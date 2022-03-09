import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './SocialIcon.module.css'

const SocialIcon = props => {
  return (
    <a className={`${classes.socialBtn} ${props.className}`} href={props.socialLink}>
      <FontAwesomeIcon icon={props.icon}/>
    </a>
  )
}

export default SocialIcon