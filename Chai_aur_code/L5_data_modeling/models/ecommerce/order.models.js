import mongoose from "mongoose";
import { Product } from "./product.models";

const userSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Product: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
