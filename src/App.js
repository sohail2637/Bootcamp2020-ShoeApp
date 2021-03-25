import { NaveBar } from "./component/naveBar";
import { Home } from "./component/Home";
import { Descraption } from './component/Descraption';
import {UpComing } from './component/UpComing';
import { BrowserRouter, Route,  } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NaveBar />
        <Route path="/" exact component={Home} />
        <Route path="/descraption/:id" component={Descraption} />
        <Route path="/upcoming" component={UpComing} />
      </BrowserRouter>
    </div>
  );
}

export default App;
