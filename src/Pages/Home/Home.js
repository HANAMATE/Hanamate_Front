import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import LocaleString from "../../util/LocaleString";
import { authActions } from "../../store/auth-slice";
import HomeTitle from "./components/HomeTitle";
import HomeButtonBox from "./components/HomeButtonBox";
import HomeCardBox from "./components/HomeCardBox";
import Footer from "../../components/Layout/Footer";
import RootLayout from "../../components/Layout/RootLayout";
// import Header from "../../components/Layout/Header";

const Home = (props) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, expiredAt, name, balance, isParent } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) return;
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8080/").then((res) => {
      // axios.get("https://hanamate.onrender.com/").then((res) => {
      if (res.data.Status === "Success") {
        console.log("Success on React Server");
        console.log(res.data.loginId);
        dispatch(
          authActions.login({
            expiredAt: res.data.expiredAt,
            name: res.data.name,
            balance: res.data.balance,
            isParent: res.data.isParent,
          })
        );
      } else {
        setMessage(res.data.Message);
      }
      setLoading(false);
    });
  }, []);

  return (
    <RootLayout footer={true}>
      {/* <Header left="blank" title="홈" right="blank" /> */}
      <HomeTitle
        isAuthenticated={isAuthenticated}
        name={name}
        message={message}
        balance={LocaleString(balance)}
        loading={loading}
      />
      <HomeButtonBox />
      <HomeCardBox />
      <Footer />
    </RootLayout>
  );
};

export default Home;
