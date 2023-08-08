import { Fragment } from "react";
import classes from "./CommunityAccount.module.css";
import Header from "../../../components/Layout/Header";
import CommunityLayout from "../../../components/Layout/CommunityLayout";

import Wave from "../../../assets/wave-colored.png";
import DUMMY00 from "../../../assets/DUMMY01.jpeg";
import DUMMY01 from "../../../assets/DUMMY01.jpeg";
import DUMMY02 from "../../../assets/DUMMY02.jpeg";
import DUMMY03 from "../../../assets/DUMMY03.jpeg";
import DUMMY04 from "../../../assets/DUMMY04.jpeg";
import DUMMY05 from "../../../assets/DUMMY05.jpeg";
import DUMMY06 from "../../../assets/DUMMY06.jpeg";
import DUMMY07 from "../../../assets/DUMMY07.jpeg";
import DUMMY08 from "../../../assets/DUMMY08.jpeg";
import DUMMY09 from "../../../assets/DUMMY09.jpeg";
import DUMMY10 from "../../../assets/DUMMY10.jpeg";
import DUMMY11 from "../../../assets/DUMMY11.jpeg";
import DUMMY12 from "../../../assets/DUMMY12.jpeg";
import Article from "../Article";
import CommunityHeader from "../../../components/Layout/CommunityHeader";
import Section from "../../../components/Card/Section";
import Wallet from "../../../components/Card/Wallet";

const DUMMY_ARTICLE = [
  // DUMMY00,
  DUMMY01,
  DUMMY02,
  DUMMY03,
  DUMMY04,
  DUMMY05,
  DUMMY06,
  DUMMY07,
  DUMMY08,
  DUMMY09,
  DUMMY10,
  DUMMY11,
  DUMMY12,
];

const CommunityAccount = (props) => {
  return (
    <CommunityLayout>
      <Header left="back" title="시그니엘" right="blank" />
      <div className={classes.container}>
        <div className={classes.walletBox}>
          <Wallet color="blue" />
        </div>
        <Section community={true} title="모임일기" seeMore={true} seeMoreText="거래내역 전체보기" seeMoreColor="red">
          {DUMMY_ARTICLE.map((each) => {
            return <Article key={each} image={each} />;
          })}
        </Section>
        <section className={classes.articleSection}></section>
      </div>
    </CommunityLayout>
  );
};

export default CommunityAccount;
