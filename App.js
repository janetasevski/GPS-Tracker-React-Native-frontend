import React from "react";

import { Navigation } from "./src/navigations";

import { AuthContextProvider } from "./src/context/Auth.context";
import { LocationContextProvider } from "./src/context/Location.context";

const App = () => {
  return (
    <AuthContextProvider>
      <LocationContextProvider>
        <Navigation />
      </LocationContextProvider>
    </AuthContextProvider>
  );
};

export default App;
