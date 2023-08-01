import classes from "./Header.module.css";
import { HouseDoor, PersonCircle } from "react-bootstrap-icons";

const Header = (props) => {
  return (
    <div className={classes.headerBox}>
      {props.left || <div />}
      {/* <HouseDoor size="32" /> */}
      <div className={classes.titleBox}>
        <p>{props.title}</p>
      </div>
      {props.right || <div />}
      {/* <PersonCircle size="32" /> */}
    </div>
  );
};

export default Header;
