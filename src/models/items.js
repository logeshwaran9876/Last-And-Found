// models/Item.js
import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['lost', 'found'],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  qrCodeId: {
    type: String,
    default: null
  },
  isMatched: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });


const Item = mongoose.model('Item', itemSchema);
export default Item; 