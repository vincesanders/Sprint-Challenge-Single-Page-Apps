import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';

//TODO: change styling of Header Link


export default function App() {
  return (
    <main>
      <Link to='/'><Header /></Link>
      <Switch>
        <Route path='/character-list'>
          <CharacterList />
        </Route>
        <Route path='/'>
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
