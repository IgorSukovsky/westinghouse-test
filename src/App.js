import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import InfoSocial from "./components/infoSocial/infoSocial";
import MessageForm from "./components/messageForm/messageForm";
import Social from "./components/social/Social";

const App = () => {
  return (
    <>
      <Header />
      <Social />
      <InfoSocial />
      <MessageForm />
      <Footer />
    </>
  );
};

export default App;
