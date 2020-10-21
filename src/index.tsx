// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, render } from 'preact';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';

render(<Provider store={store}>
  <App title='cool working' />
</Provider>, document.getElementById('app'));
