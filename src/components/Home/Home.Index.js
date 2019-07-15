import React from "react";
import Button from "../Generic/Button";
import "./home.scss";

function Home(props) {
  const handlClick = () => {
    props.history.push("/basket");
  };

  return (
    <div className="home">
      <header className="home-header">
        Hi There, please click below
        <Button onClick={handlClick}>Continue</Button>
      </header>
    </div>
  );
}

export default Home;
