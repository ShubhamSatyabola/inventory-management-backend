const mongoose = require("mongoose");
const { Schema } = mongoose;
const componentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    received_date: {
      type: Date,
      required: true,
    },
    dispatched_date: {
      type: Date,
      default: null,
    },
  },
  quantity: {
    received_quantity: {
      type: Number,
      required: true,
    },
    dispatched_quantity: {
      type: Number,
      default: null,
    },
  },
  Qr: {
    type: String,
    default: null,
  },
});
// Define a virtual property 'id' that maps to the '_id' field
componentSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are included in the toJSON output
componentSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id; // Exclude the '_id' field from the response
  },
  versionKey: false,
});

exports.Component = mongoose.model("Component", componentSchema);
