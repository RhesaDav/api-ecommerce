const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true, unique: true },
        products: [
            {
                productID: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ],
        amount: {type: String, required: true},
        address: { type: String, required: true},
        status: {type: String, default: "pending"}
      },
      { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
