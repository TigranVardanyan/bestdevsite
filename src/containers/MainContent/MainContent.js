import classes from "./MainContent.module.css";

const MainContent = props => {
  return (
    <div className={classes.mainContent}>
      {props.children}
    </div>
  )
}

export default MainContent