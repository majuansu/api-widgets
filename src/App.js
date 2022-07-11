import "./App.css";
import React from "react";
import Videos from "./components/Videos";
import Photos from "./components/Photos";
import Wikipedia from "./components/Wikipedia";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      {/* <Videos /> */}
      {/* <Photos /> */}
      {/* <Wikipedia /> */}
      {/* <Translation /> */}
      <Header />
      <Route route="/">
        <Photos />
      </Route>

      <Route route="/videos">
        <Videos />
      </Route>

      <Route route="/translate">
        <Translate />
      </Route>

      <Route route="/wikipedia">
        <Wikipedia />
      </Route>
    </div>
  );
};

export default App;
