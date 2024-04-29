import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'A tour must have a name'], unique: true, trim: true },
  duration: { type: Number, required: [true, 'A tour must have a duration'] },
  maxGroupSize: { type: Number, required: [true, 'A tour must have a maxGroup size'] },
  difficulty: { type: String, required: [true, 'A tour must have a difficulty'] },
  ratingsAverage: { type: Number, default: 4.5 },
  ratingsQuantity: { type: Number, default: 0 },
  price: { type: Number, required: [true, 'A tour must have a price'] },
  summary: { type: String, trim: true, required: [true, 'A tour must have a description'] },
  description: { type: String, trim: true },
  imageCover: { type: String },
  images: [String],
  createAt: {
    type: Date,
    default: Date.now()
  },
  startDates: [Date]
})

export const Tour = mongoose.model('Tour', tourSchema)