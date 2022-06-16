import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store-creator';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  //<React.StrictMode> this should be used for Development environment only as it affects the 'useEffect' hook to be called twice: https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
    <Provider store={store}>
      <App />
    </Provider>
  //</React.StrictMode>
);
