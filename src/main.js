import React from "react";
import NavBar from "./NavBar";
import Card3 from "./components/Card3";
import Card2 from "./components/Card2";
import Card1 from "./components/Card1";
import Footer from "./components/footer/footer";
import {
  navItems,
  navBar,
  Card3PropsList,
  Card1PropsList,
  Card2PropsList,
  introProps,
  brandsItemList
} from "./Data";

const Header = () => {
  return (
    <div className="header">
      <img
        width="300"
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
      />

      <NavBar list={navItems} />
    </div>
  );
};

const Introduction = ({ intro }) => {
  return (
    <div className="introduction">
      <img src={intro.icone} />
      <h1 className="intro-title"> {intro.title}</h1>
      <div className="intro-texts">
        <div className="intro-text-bloc">
          <p>{intro.firstIntroText}</p>
        </div>
        <div className="intro-text-bloc">
          <p>{intro.secondIntroText}</p>
        </div>
      </div>
    </div>
  );
};

const Services = props => {
  return (
    <div className="services">
      {props.list.map((el, i) => (
        <Card3 card={el} key={i} />
      ))}
    </div>
  );
};

const Brands = props => {
  return props.brandItems.map((el, i) => (
    <div className="brand-item" key={i}>
      <a href="" style={{ textDecoration: "none" }}>
        {el}
      </a>
    </div>
  ));
};

const BrandsSection = () => {
  return (
    <div className="brands-section">
      <div className="brands-title">
        <h2>We are a global company with local culture</h2>
      </div>
      <div className="brands" onMouseOver="">
        <Brands brandItems={brandsItemList} />
      </div>
    </div>
  );
};

const Sec1 = () => {
  return (
    <div className="feature-section">
      <div className="feature-intro">
        <h1 className="feature-intro-title">
          The world's biggest healthcare platform
        </h1>
        <p className="feature-intro-text">
          We work from 6 offices all over the world, bringing Docplanner Group
          to life in almost 20 countries.
        </p>
      </div>
      <Features Card1List={Card1PropsList} />
    </div>
  );
};

const Features = props => {
  return (
    <div className="features">
      {props.Card1List.map((el, i) => (
        <Card1 feature={el} key={i} />
      ))}
    </div>
  );
};

const Offices = props => {
  return (
    <div className="offices-section">
      <div className="offices-intro">
        <h1 style={{ color: "#00b39b" }}>
          Improve the lives of millions.
          <br /> Change yours forever
        </h1>
        <p style={{ color: "#747474" }}>
          More than 500 team mates share our same vision, goals and passion.
          With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and
          Curitiba, our search for great talent never stops.
        </p>
      </div>
      <div className="offices">
        {props.offices.map((el, i) => (
          <Card2 office={el} key={i} />
        ))}
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Introduction intro={introProps} />
      <Services list={Card3PropsList} />
      <BrandsSection />
      <Sec1 />
      <Offices offices={Card2PropsList} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header /> <Main />
      <Footer />
    </div>
  );
};
export default App;
