import React, { useState } from 'react';
import { addTransaction } from '../services/api';

const TransactionForm: React.FC = () => {
  const [transaction, setTransaction] = useState({
    transactionId: '',
    amount: '',
    timestamp: '',
    location: '',
    merchant: '',
    userId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addTransaction(transaction);
    alert('Transaction added successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="transactionId" value={transaction.transactionId} onChange={handleChange} placeholder="Transaction ID" />
      <input name="amount" value={transaction.amount} onChange={handleChange} placeholder="Amount" />
      <input name="timestamp" value={transaction.timestamp} onChange={handleChange} placeholder="Timestamp" />
      <input name="location" value={transaction.location} onChange={handleChange} placeholder="Location" />
      <input name="merchant" value={transaction.merchant} onChange={handleChange} placeholder="Merchant" />
      <input name="userId" value={transaction.userId} onChange={handleChange} placeholder="User ID" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;
