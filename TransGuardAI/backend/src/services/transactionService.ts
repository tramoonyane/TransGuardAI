import Transaction, { ITransaction } from '../models/transaction';

export const createTransaction = async (transactionData: ITransaction) => {
  const transaction = new Transaction(transactionData);
  await transaction.save();
  return transaction;
};

export const getTransactions = async () => {
  return await Transaction.find();
};
