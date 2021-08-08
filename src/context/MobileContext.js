import React, { Component, createContext } from "react";

import useWindowDimensions from "../Hooks/WindowDimensions";

export const MobileContext = createContext();

function MobileContextProvider(props) {
  //since useEffect is under this component so if this component is not used then resize event will be removed

  const { height, width } = useWindowDimensions();
  const isMobile = width <= 480 ? true : false;

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {props.children}
    </MobileContext.Provider>
  );
}

export default MobileContextProvider;
