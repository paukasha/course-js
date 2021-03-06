import App from './app';
import React from 'react'

import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/reducers';

render(<Provider store={store}>
        <HashRouter >
            <App/>
        </HashRouter>
  </Provider>,  document.getElementById('root')
)

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
  module.hot.accept();
}

