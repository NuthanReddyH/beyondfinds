const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  plan: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  autoRenewal: {
    type: Boolean,
    default: true,
  },
  billingAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  paymentHistory: [
    {
      transactionID: String,
      amount: Number,
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  trialPeriod: {
    startDate: Date,
    endDate: Date,
  },
});
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    subscription: subscriptionSchema,
    chatHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Conversation",
      },
    ],
    profile: {
      firstName: String,
      lastName: String,
      avatar: String,
      bio: String,
      phone: String,
      dob: String
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
