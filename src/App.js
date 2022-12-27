import React  from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Chart from "./components/Chart";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chart" component={Chart} />
        <Route path="/product-detail/:id" component={ProductDetail}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
