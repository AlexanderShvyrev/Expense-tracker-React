import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomExpenses} from './components/IncomExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
