import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const addTransaction = async (transactionData: any) => {
  return await api.post('/transactions', transactionData);
};

export const fetchTransactions = async () => {
  return await api.get('/transactions');
};
