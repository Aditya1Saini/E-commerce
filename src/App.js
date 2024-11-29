import './App.css';
import Header from './component/Header';
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/About'
import Product from './component/Product'
import Contact from './component/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';
import Checkout from './component/Checkout'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;