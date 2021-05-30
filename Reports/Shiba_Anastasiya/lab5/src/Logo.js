import React, { Fragment } from "react";
import ReactLogo from "./Octocat.png";
import { HeadingStyle } from "./logo.style";
import { LogoStyle } from "./logo.style";

const Logo = () => {
  return (
    <Fragment>
      <header>
        <HeadingStyle >
          Create React App
          <LogoStyle src={ReactLogo} alt="GitHub Logo" />
        </HeadingStyle>
      </header>
    </Fragment>
  );
};

export default Logo;