import classes from './Service.module.css'

const Service = props => {
  return (
    <div className={classes.service}>
      <div style={{ backgroundImage: `url(${props.img}` }} alt=""/>
      <h3>{props.service}</h3>
      <p>{props.desc}</p>
    </div>
  )
}
export default Service