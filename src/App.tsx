import { Provider } from 'react-redux';
import store from './store';
import MenuComponent from './components/MenuComponent';
import ViewPanel from './components/ViewPanel';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <MenuComponent />
      <ViewPanel />
    </div>
  </Provider>
);

export default App;