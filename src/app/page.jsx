import React from "react";
import Head from "next/head"
import Header from "../app/component/header"; // Adjust path as needed
import Home from "../app/component/home"
import Logo from "../app/component/logo"
import Portfolio from "./component/portfolio"
import Journal from "./component/journal";
import Achievement from "./component/achievement";
import Contact from "./component/contact";
import Service from "./component/service";
import About from "./component/about";




export default function Page() {
  return (
    <div className="min-h-screen   bg-neutral-900">
     
      <Head>
        <title>Monie</title>
        <meta name="description" content="This is my awesome React page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     
      <Header />
      <Home />
      <Service />
      <Portfolio />
      <Achievement />
      <Logo />
      <Journal />
     
      <Contact />
      <About />


    </div>
  );
}
