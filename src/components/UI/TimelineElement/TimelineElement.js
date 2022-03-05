import classes from './TimelineElement.module.css'

const TimelineElement = props => {
  return (<div className={classes.timelineElementWrapper}>
    <div className={classes.timelineElement}>
      <a className={classes.timelineElementLink} href={props.link ? props.link : '#'}>
        {props.name}
      </a>
      <p className={classes.info}>
        <span className={classes.date}>
          {props.date}
        </span>
        <span>  |  </span>
        <span className={classes.desc}>
          {props.desc}
        </span>
      </p>
    </div>
  </div>)
}
export default TimelineElement