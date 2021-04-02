import React from "react";

import { Navigation } from "./src/navigations";

import { AuthContextProvider } from "./src/context/Auth.context";

const App = () => {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
};

export default App;
