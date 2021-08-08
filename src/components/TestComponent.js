import React from "react";

import { MobileContext } from "../context/MobileContext";

export const TestComponent = () => {
  return (
    <MobileContext.Consumer>
      {(context) => {
        const { isMobile } = context;

        return isMobile ? <p>Mobile</p> : <p>Not Mobile</p>;
      }}
    </MobileContext.Consumer>
  );
};
