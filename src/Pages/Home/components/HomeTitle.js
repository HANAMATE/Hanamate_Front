import { Fragment } from "react";
import classes from "./HomeTitle.module.css";
import { useNavigate } from "react-router-dom";

const HomeTitle = (props) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      {!props.isAuthenticated ? (
        <header className={classes.startTitle} onClick={() => navigate("/login")}>
          <div className={classes.startMessage}>
            <p>지금 바로</p>
          </div>
          <div className={classes.startMessage}>
            하나메이트 시작하기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </header>
      ) : (
        <button className={classes.headerButton}>
          <div className={classes.firstText}>
            <p>김민재</p>
          </div>
          <div className={classes.secondText}>
            <p>내 지갑 {props.balance}원</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            {/* <MdOutlineArrowForwardIos /> */}
          </div>
        </button>
      )}
    </Fragment>
  );
};

export default HomeTitle;
