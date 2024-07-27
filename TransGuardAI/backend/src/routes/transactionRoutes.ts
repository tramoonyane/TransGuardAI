import { Router } from 'express';
import { addTransaction, fetchTransactions } from '../controllers/transactionController';

const router = Router();

router.post('/', addTransaction);
router.get('/', fetchTransactions);

export default router;
