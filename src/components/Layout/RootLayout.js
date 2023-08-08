import classes from "./RootLayout.module.css";

const RootLayout = (props) => {
  const extraHeader = props.header ? classes.withHeader : classes.withoutHeader;
  const extraFooter = props.footer ? classes.withFooter : classes.withoutFooter;

  return (
    <div className={classes.outerBox}>
      <div className={classes.fixedBox} />
      <div className={`${classes.innerBox} ${extraHeader} ${extraFooter}`}>{props.children}</div>
    </div>
  );
};

export default RootLayout;
