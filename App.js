import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';

import Menu from './src/views/menu/index';

export default App = () => {
    return (
      <Provider store={store}>
        <Menu />
      </Provider>
    );
}

