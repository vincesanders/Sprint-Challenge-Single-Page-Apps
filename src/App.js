import React from "react";
import { Route, link, Switch } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path='/'>
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
