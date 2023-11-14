import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  phone: {
    callingCode: {
      type: String,
    },
    number: {
      type: Number,
      unique: true,
    },
  },

  aadharID: {
    type: String,
    unique: true,
  },

  address: {
    house: {
      type: String,
    },

    area: {
      type: String,
    },

    city: {
      type: String,
    },

    state: {
      type: String,
    },

    country: {
      type: String,
      default: "India",
    },
  },
});

export default mongoose.models.User ||
  mongoose.model("User", UserSchema, "users");
