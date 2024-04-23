import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Component/Home/Home';
import Analytics from './Component/Analytics/Analytics';
import Products from './Component/Products/Products';
import Settings from './Component/Settings/Settings';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/analytics' exact element={<Analytics />} />
            <Route path='/products' exact element={<Products />} />
            <Route path='/settings' exact element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
