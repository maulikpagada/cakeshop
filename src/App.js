import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './container/Home/Home';
import About from './container/About/About';
import Contact from './container/Contact/Contact';
import manu from './container/manu/Manu';
import Master from './container/Master/Master';
import Page from './container/Page/Page';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/About"} component={About}/>
        <Route exact path={"/Contact"} component={Contact}/>
        <Route exact path={"/manu"} component={manu}/>
        <Route exact path={"/Master"} component={Master}/>
        <Route exact path={"/Page"} component={Page}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
