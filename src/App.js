import logo from './logo.svg';
import './App.css';
import './components/Header';
import './bootstrap.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import React, {Fragment} from "react";


function App() {
  return (
    <Fragment>
      <Header />
      <Todos />
      
    </Fragment>
  );
}

export default App;
