import './App.css';
import Product from './Product/Product';
import ProductOverview from './Product/ProductOverview';
import HomePage from './customer/components/pages/HomePages/HomePage'
import Navigation from './customer/components/Navigation/Navigation'
import ProductQuick from './Product/ProductQuickView';
import Cart from './customer/components/Cart/Cart';
function App() {
  return (
    <div className="App">
        {/*  <Navigation />*/}
      <div>
        {/*   <HomePage/>*/}
    {/*  <Navigation />
    <HomePage/>*/}
   {/*    <ProductOverview /> */}
  
  <Navigation />
    <ProductOverview />
<Cart/>
      </div>
  {/*  <Footer /> */}
     

    </div>
  );
}

export default App;
