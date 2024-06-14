// Importing Modules
import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import CookieConsent from "./CookieConsent";
// import Footer from './Footer'

{
  /* Displays anything in DisplayAll to display throughout the server */
}
export default function GlobalComponents() {
  return (
    <>
      <DisplayAll />
      <Outlet />
    </>
  );
}

const DisplayAll = () => {
  return (
    <>
      <Header />
      <CookieConsent />
      {/* <Footer/> */}
    </>
  );
};
