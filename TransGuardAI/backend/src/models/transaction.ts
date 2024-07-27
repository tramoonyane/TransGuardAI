import mongoose, { Schema, Document } from 'mongoose';

export interface ITransaction extends Document {
  transactionId: string;
  amount: number;
  timestamp: Date;
  location: string;
  merchant: string;
  userId: string;
}

const TransactionSchema: Schema = new Schema({
  transactionId: { type: String, required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, required: true },
  location: { type: String, required: true },
  merchant: { type: String, required: true },
  userId: { type: String, required: true },
});

export default mongoose.model<ITransaction>('Transaction', TransactionSchema);
