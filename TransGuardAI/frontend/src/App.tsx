import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TransactionForm from './components/TransactionForm';
import Transactions from './pages/transactions';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TransactionForm} />
        <Route path="/transactions" component={Transactions} />
      </Switch>
    </Router>
  );
};

export default App;
