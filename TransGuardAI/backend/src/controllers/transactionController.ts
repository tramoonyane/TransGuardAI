import { Request, Response } from 'express';
import { createTransaction, getTransactions } from '../services/transactionService';

export const addTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await createTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error: unknown) {
    if(error instanceof Error){
        res.status(500).json({ message: error.message });
    }else {
        res.status(500).json({ message: 'An unknown error occurred.' });
    }
    
  }
};

export const fetchTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await getTransactions();
    res.status(200).json(transactions);
  } catch (error: unknown) {
    if(error instanceof Error){
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unknown error occurred.' });
    }
  }
};
