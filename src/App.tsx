import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/menu/menu';
import ShowCount from './components/showCount/showCount';
import Counter from './components/counter/counter';
import './app.scss';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="count">
          <Switch>
            <Route exact path="/" component={Counter} />
            <Route path="/showcount" component={ShowCount} />
          </Switch>
        </div>
        <Menu />
      </div>
    </Router>
  );
};

export default App;
