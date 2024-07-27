import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../services/api';

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const response = await fetchTransactions();
      setTransactions(response.data);
    };

    getTransactions();
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((transaction: any) => (
          <li key={transaction.transactionId}>
            {transaction.transactionId} - {transaction.amount} - {transaction.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
