import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const selector = useSelector(state => state.ui.toggleOpen);

  return (
    <Layout>
      {selector && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
