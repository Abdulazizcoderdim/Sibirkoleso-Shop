import mongoose from 'mongoose';

const tyreSchema = new mongoose.Schema({
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  diameter: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
});

const Tyre = mongoose.models.User || mongoose.model('Tyre', tyreSchema);

export default Tyre;
