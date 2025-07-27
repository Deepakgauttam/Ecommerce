const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
    }
  ],
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, default: 'pending' },
  paymentId: { type: String },
  orderStatus: { type: String, default: 'processing' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
