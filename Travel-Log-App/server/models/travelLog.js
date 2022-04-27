import mongoose from "mongoose";

const travelLogSchema = mongoose.Schema({
  location: String,
  imageForLocation: String,
  costs: Number,
  heritages: [String],
  placesToVisit: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TravelLog = mongoose.model("TravelLog", travelLogSchema);

export default TravelLog;
